import './Header.scss'
import {Link} from 'react-router';
import axios from 'axios';
import { useState } from 'react';

interface HeaderProps {
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<null | string>>;
}

function Header({ setIsConnected, setToken }: HeaderProps){

    const [pseudo, setPseudo] = useState<null | string>(null);
    const [error, setError] = useState('');

  const checkCredentials = async (email: string, pass: string) => {
    try {
      const response = await axios.post(
        'https://orecipesapi.onrender.com/api/login',
        // le second param axios.post est le body de la request
        {
          email: email,
          password: pass,
        },
      );

      // si on a reçu une 200 on va enristrer un message de bienvenue dans le state
      setPseudo(response.data.pseudo);
      setError('')
      setIsConnected(true)
      setToken(response.data.token)
      console.log(response);
    } catch (e) {
      console.log(e);
      // si on reçoit une 401 unauthirised, axios throw une erreur et on passe dans le catch et donc ici on va enregistrer une erreur dan sun state
      setError('Email ou Mdp incorrect')
    }
  };
  

    return ( 
        <div className="header">
        <Link to= "/">            
        <img src="/logo.png" alt="logo" className='header-logo' />
        </Link>
        {pseudo ? (
        <p>Bonjour {pseudo}</p>
      ) : (
        <form
          className="form"
          action={(formData) => {
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            checkCredentials(email, password);
          }}
        >
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="mot de passe" />
          <button className="form-btn" type="submit">Connexion</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </div>
    )

}
export default Header;