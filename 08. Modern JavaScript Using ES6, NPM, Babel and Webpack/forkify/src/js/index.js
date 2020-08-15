import axios from 'axios';

async function getRecipies(query) {
    const key = "b0080b30eed94f5cba5fcb96a1767051";
    const res = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=pasta`);
    console.log(res);
}
getRecipies();