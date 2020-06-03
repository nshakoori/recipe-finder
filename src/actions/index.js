import mealDb from '../apis/mealDb'

export const fetchRecipes = () => async dispatch => {
    const response = await mealDb.get('/api/json/v1/1/search.php?f=a')

    dispatch({
        type: 'FETCH_RECIPES',
        payload: response.data.meals
    })
}

export const fetchRecipeByName = name => async dispatch => {
    const response = await mealDb.get(`/api/json/v1/1/search.php?s=${name}`)

    dispatch({
        type: 'FETCH_RECIPES',
        payload: response.data.meals
    })
}