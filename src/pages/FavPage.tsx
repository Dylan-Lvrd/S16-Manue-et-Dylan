// cette page est affichée que si on est connecté donc on a surement un token sauvegardé quelque part on va pouvoir faire une requete sur le endpoint /fav pour recup les recettes pref de notre user connecté

import axios from 'axios';
import { useState } from 'react';
import { IRecipes } from '../@types/recipes';
import { Link } from 'react-router';
import '../components/Articles/Articles.scss'



export default function FavPAge({ token }: { token: string | null }) {
  const [fav, setFav] = useState<IRecipes[]>([]);


  const fetchFav = async () => {
    const response = await axios.get(
      'https://orecipesapi.onrender.com/api/favorites',

      // objet de config pour ajouter le token dans l'entete authorization
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response);
    setFav(response.data.favorites);
  };
  fetchFav();

  return (
    <div className="content">
        {fav.map((recipe) => {
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
