import './Articles.scss';
import type { IRecipes } from '../../@types/recipes';
import {Link} from 'react-router';

interface IArticlesProps {
    recipeList: IRecipes[];
}

function Articles ({recipeList}: IArticlesProps) {
    return (
        <div className="content">
            {recipeList.map((recipe) => {
                return (
                    <div key={recipe.id} className="card">
                        <img src={recipe.thumbnail} alt={`Recette ${recipe.title}`} />
                        <h3 className="card-title">{recipe.title}</h3>
                        <p className="card-difficulty">Difficulté: {recipe.difficulty}</p>
                       
                       <Link to={`/recipes/${recipe.slug}`}>
                        <button type="button" className="card-button">Voir la recette</button>
                       </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default Articles;