import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";
import { bcwApi } from "../Services/AxiosService.js"


//Private
function _drawQuote() {
    const quote = ProxyState.quote;
    document.getElementById('quote-widget').innerHTML = quote.QuoteTemplate;
}

//Public
export class QuoteController {
    constructor() {
        ProxyState.on('quote', _drawQuote);
        this.getQuote();
    }

    async getQuote() {
        try {
            await quoteService.getQuote();
        } catch (error) {
            Pop.error(error)
            console.error('[getQuote]', error);
        }
    }
}