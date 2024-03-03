/* eslint-disable react/prop-types */
export default function SingleRecipe({ ingredients }) {
    console.log(ingredients)
    return (
        <>
            <h5>ingredients</h5>
            <ul>
                {
                    ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
                }
            </ul>
        </>
    )
}
