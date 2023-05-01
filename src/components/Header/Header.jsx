import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const {user,Logout}=useContext(AuthContext);
    // console.log(user);
   const handleLogout=()=>{
    Logout()
    .then((result)=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error.message);
    })
   }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">sign up</Link>
             
                {
                user && <span className='me-2 p-2' >{user.email}<button className='p-2' onClick={handleLogout} >Log out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;