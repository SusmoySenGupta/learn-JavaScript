import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getRecipies() {
        const key = "d4941e6bc8c744398bd97db824b34441";
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${this.query}&number=30&apiKey=${this.key}`);
            this.recipies = res.data.results;
        } catch (error) {
            alert(error);
        }
    }
}