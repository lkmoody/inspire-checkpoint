import { ProxyState } from "../AppState.js";
import { BackgroundImage } from "../Models/BackgroundImage.js";
import { bcwApi } from "../Services/AxiosService.js";

class BackgroundImageService {
    updateBackgroundImage(backgroundImage) {
        ProxyState.backgroundImage = backgroundImage;
    }

    async getBackgroundImage() {
        const response = await bcwApi.get('images');
        ProxyState.backgroundImage = new BackgroundImage(response.data.author, response.data.query, response.data.largeImgUrl);
    }
}

export const backgroundImageService = new BackgroundImageService();

