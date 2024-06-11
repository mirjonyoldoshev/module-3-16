
export const renderPhotosInGrid = (data) => {
    const imageGrids = $imageGrid.children;     
    const imageGridsArray = Array.from(imageGrids);
    let index = 0;
    let chengeLimit = Math.floor(data.length / 3);
    imageGridsArray.forEach((imageGridItemContainer, index) => {
        const imageDataGroups = data .slice(index, index + chengeLimit);
        const $imageFragment = document.createDocumentFragment();
        imageDataGroups.forEach(image => {
            console.log(image)
            const $a = document.createElement("a");
            $a.href =`../pages/image-preview.html?image-id=${image.id}`
            $a.target = "_blank"
            $a.className = "image-item";
            $a.innerHTML =`
                <img src="${image.src.original}?auto=compress&cs=tinysrgb&w=400" alt="${image.alt}" />
                <div class="image-cover">
                    <div class="image-button-group"></div>
                    <div class="image-account">
                        <div class="photographer-avatar"></div>
                        ${image.photographer}
                        <a href="${image.src.original}?cs=srgb&amp;dl=pexels-alikarimibn-6284716.jpg&amp;fm=jpg">Download</a>
                    </div>
                </div>
            `    
            $imageFragment.appendChild($a); 
        })
        index += chengeLimit;
        imageGridItemContainer.appendChild($imageFragment);
    })
    
}

export const renderPrviewImage = (data) => {
    $previewImage.src = data.src.original;  
}