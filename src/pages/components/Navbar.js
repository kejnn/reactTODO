import React from 'react';
import {NavLink} from 'react-router-dom';


export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className='navbar-brand'>
            Заметки
        </div>
        <ul className='navbar-nav'>
            <li className='navbar-item'>
                <NavLink
                    style={{color: 'white'}}
                    className='navbar-link'
                    to='/'
                    exact
                >
                    Главная
                </NavLink>
            </li>
            <li className='navbar-item'>
                <NavLink 
                    style={{color: 'white'}}
                    className='navbar-link'
                    to='/about'
                >
                    Информация
                </NavLink>
            </li>
        </ul>
    </nav>
)