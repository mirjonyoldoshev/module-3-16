import axios from "./axios.js";
import { renderPrviewImage } from "./render.js";

const URL  = location.search;
const IMAGE_ID = new URLSearchParams(URL).get("image-id");

const loadSinglePhoto = async (id) => {
    try{
        const response = await axios(`/photos/${id}`);
        renderPrviewImage(response.data); 
    }catch(error){
        console.log(error)
    }
}

loadSinglePhoto(IMAGE_ID)