import './Header.scss'
import {Link} from 'react-router';

function Header(){
    return ( 
        <div className="header">
        <Link to= "/">            
        <img src="/logo.png" alt="logo" className='header-logo' />
        </Link>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Mot de passe"/>
        
        <button type='button'>Connexion</button>
    </div>
    )
}
export default Header;