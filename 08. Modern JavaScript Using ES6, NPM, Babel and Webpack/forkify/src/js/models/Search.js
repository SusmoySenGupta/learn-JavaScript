import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getRecipies() {
        const key = "b0080b30eed94f5cba5fcb96a1767051";
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${this.query}`);
            this.recipies = res.data.results;
        } catch (error) {
            alert(error);
        }
        //console.log(res);
    }
}