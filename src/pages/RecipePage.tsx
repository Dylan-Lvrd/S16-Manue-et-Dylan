import type { IRecipes } from '../@types/recipes';
import {useParams} from 'react-router';
import './RecipePage.scss'

 
function RecipePage({recipeList}: {recipeList : IRecipes[]}){

    const {slug} = useParams<{slug: string}>();
  
    const recipe = recipeList.find((recipe) => recipe.slug === slug);
    console.log(recipe)
    return(
     <div className="recipe-container"> 
     <img src={recipe?.thumbnail} alt="" className="card-img" /> 
     <div className="infos">
  
            <h1 className="title">{recipe?.title}</h1>
            <p className="info">{recipe?.author} - {recipe?.difficulty}</p>  
        </div>
        <ul className='ingredients'>
        {recipe?.ingredients.map((ingredient) => (
            <li key={ingredient.id} className="ingredient"><strong>{ingredient.quantity}{ingredient.unit !== '' && ` ${ingredient.unit}`}</strong> {ingredient.name}</li>
        ))}

        </ul>
        <ol className="instruction-list">
            {recipe?.instructions.map((instructions)=>(

                <li key={instructions} className="instruction">{instructions}</li>

            ))}
        </ol>
    </div>    
    )
}

export default RecipePage;