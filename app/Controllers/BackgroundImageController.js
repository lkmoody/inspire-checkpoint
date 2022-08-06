import { ProxyState } from "../AppState.js";
import { backgroundImageService } from "../Services/BackgroundImageService.js";
import { Pop } from "../Utils/Pop.js";
import { bcwApi } from "../Services/AxiosService.js";
import { BackgroundImage } from "../Models/BackgroundImage.js";


//Private
async function _drawBackground() {
    const backgroundImage = ProxyState.backgroundImage;

    const body = document.body;
    body.style.backgroundImage = `url('${backgroundImage.imageUrl}')`;
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
    body.style.backgroundSize = "cover";

    const imageInfo = document.getElementById('image-info-widget');
    imageInfo.innerHTML = backgroundImage.BackgroundImageTemplate;
}

//Public
export class BackgroundImageController {
    constructor() {
        ProxyState.on('backgroundImage', _drawBackground);
        this.getBackgroundImage();
    }

    async getBackgroundImage() {
        try {
            await backgroundImageService.getBackgroundImage();
        } catch (error) {
            Pop.error(error)
            console.error('[getBackgroundImage]', error);
        }
    }
}