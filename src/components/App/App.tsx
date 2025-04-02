import './App.scss';
import  {useEffect, useState} from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Articles from '../Articles/Articles';
import axios from 'axios';
import type {IRecipes} from '../../@types/recipes';
import {Routes, Route} from 'react-router';
import RecipePage from '../../pages/RecipePage';
import '../styles/reset.scss';

function App() {
  
  const [recipeList, setRecipeList] = useState<IRecipes[]>([]);
 
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
    }
    getRecipes()
  }, []);

  return (
    
  <div className='app'>
      <Header />
      
      <div className="container">

          <Sidebar recipeList={recipeList}/>


          <Routes>
           {/* route pour l'Accueil*/}
            <Route
            path='/'
            element={<Articles recipeList={recipeList}/>} 
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
          </Routes>
          
      </div>

  </div>
    
  )
}

export default App


