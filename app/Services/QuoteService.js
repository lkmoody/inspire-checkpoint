import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { bcwApi } from "../Services/AxiosService.js";

class QuoteService {
    async  getQuote() {
        const response = await bcwApi.get('quotes');
        ProxyState.quote = new Quote(response.data.author, response.data.content);
    }
}

export const quoteService = new QuoteService();