import './Sidebar.scss'
import { NavLink } from "react-router";
import type { IRecipes } from '../../@types/recipes';

interface INavRecepes{
    recipeList: IRecipes[];
}

function Sidebar ({recipeList}: INavRecepes){
    return (
        <nav className="sidebar" >
            <NavLink to="/">Accueil</NavLink>
        {recipeList.map((recipe)=>{
            return (
                <NavLink key={recipe.id} to={`/recipes/${recipe.slug}`}>{recipe.title}</NavLink>
            )
        })}
        </nav>
    )
}

export default Sidebar ;