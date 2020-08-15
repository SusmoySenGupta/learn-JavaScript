import Search from './models/Search';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipies
 */
const state = {};

const SearchController = async () => {
    // 1. Get query from view
    const query = 'pizza';

    if (query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results

        // 4. Search for recipies
        await state.search.getRecipies();

        // 5. Render results on UI
        console.log(state.search.recipies);
    }
}

document.querySelector('.search').addEventListener('submit', event => {
    event.preventDefault();
    SearchController();
});

const search = new Search('pizza');
console.log(search);
console.log(search.getRecipies());