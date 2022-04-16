import React from 'react';
import avatar from '../img/avatar.jpg';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>

    <nav className="nav">
        <div className="profile">
            <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
            <li className="nav-item">
                <NavLink to='/' activeClassName='active' exact>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/about' activeClassName='active' exact>
                    About
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/portfolios' activeClassName='active' exact>
                    Portfolios
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/contact' activeClassName='active' exact>
                    Contact
                </NavLink>
            </li>
        </ul>
    <footer className="footer">
        <p>&copy; 2022 My Portfolio Website</p>
    </footer>
    </nav>

    </div>
  )
}

export default NavBar;