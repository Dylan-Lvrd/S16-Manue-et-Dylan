import './App.scss';
import  {useEffect, useState} from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Articles from '../Articles/Articles';
import axios from 'axios';
import type {IRecipes} from '../../@types/recipes';
import {Routes, Route} from 'react-router';
import RecipePage from '../../pages/RecipePage';
import FavPAge from '../../pages/FavPage';

function App() {
  
  const [recipeList, setRecipeList] = useState<IRecipes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [token, setToken] = useState<null | string>(null);
 
  useEffect (() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get(
          'https://orecipesapi.onrender.com/api/recipes',
        );
        console.log(response.data)
       setRecipeList(response.data)
      }
      catch(error){
        console.log(error);

      }
      setIsLoading(false)
    };
    getRecipes()
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <p>Loading...</p>
        </div>
      </div>
    );
  };

  return (
    
  <div className='app'>
      <Header setIsConnected={setIsConnected} setToken={setToken} />
      
      <div className="container">

          <Sidebar recipeList={recipeList} isConnected={isConnected}/>


          <Routes>
           {/* route pour l'Accueil*/}
            <Route
            path='/'
            element={<Articles recipeList={recipeList} />} 
            />

            {/* route pour la page de recette*/}
            <Route 
            path='/recipes/:slug'
            element={<RecipePage recipeList={recipeList}/>}
            />

            {/* route pour les erreurs 404 */}
            <Route 
            path='*'
            element={<div>Erreur 404</div>}
            />

{isConnected && (
              <Route path="/fav" element={<FavPAge token={token} />} />
            )}
          </Routes>
          
      </div>

  </div>
    
  )
}

export default App


