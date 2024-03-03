import SingleRecipe from "../components/SingleRecipe"
import { recipes } from "../data/recipes"
export default function RecipeList() {
    
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(item =>
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <SingleRecipe ingredients={item.ingredients}/>
                    <hr />
                </div>
            )}
        </div>
    )
}
