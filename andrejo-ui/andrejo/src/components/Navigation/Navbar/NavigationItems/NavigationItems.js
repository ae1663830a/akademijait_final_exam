import React from 'react';
import './NavigationItems.css';
import RouteNavItem from './RouteNavItem/RouteNavItem';

const navigationItems = () => (
    <div>
        <ul id='navigationItems' className="NavigationItems">
            <RouteNavItem id='services' to="/">Paslaugos</RouteNavItem>
            <RouteNavItem id='providers' to="/providers">Visi teikėjai</RouteNavItem>
            <RouteNavItem id='providerForm' to="/service/provider/register">Sukurti teikėją</RouteNavItem>
            <RouteNavItem id='serviceForm' to="/service/register">Sukurti paslaugą</RouteNavItem>
        </ul>
    </div>

);

export default navigationItems;
