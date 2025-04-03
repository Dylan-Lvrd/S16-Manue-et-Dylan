import './Sidebar.scss'
import { NavLink } from "react-router";
import type { IRecipes } from '../../@types/recipes';

interface INavRecepes{
    recipeList: IRecipes[];
    isConnected: boolean;
}

function Sidebar ({recipeList, isConnected}: INavRecepes){
    return (
        <nav className="sidebar" >
            <NavLink to="/">Accueil</NavLink>
        
        {isConnected && (
          <li className="nav-item">
            <NavLink to="/fav" className="nav-link">
              Recettes favorites ❤️
            </NavLink>
          </li>
        )}
        
        {recipeList.map((recipe)=>{
            return (
                <NavLink key={recipe.id} to={`/recipes/${recipe.slug}`}>{recipe.title}</NavLink>
            )
        })}
        </nav>
    )
}

export default Sidebar ;