import React from 'react';
import './NavigationItems.css';
import RouteNavItem from './RouteNavItem/RouteNavItem';

const navigationItems = () => (
    <div>
        <ul id='navigationItems' className="NavigationItems">
            <RouteNavItem id='services' to="/">Pagrindinis</RouteNavItem>
            <RouteNavItem id='providers' to="/users">Visi klientai</RouteNavItem>
            <RouteNavItem id='providerForm' to="/dish/register">Sukurti Patiekalą</RouteNavItem>
            <RouteNavItem id='serviceForm' to="/menu/register">Sukurti meniu</RouteNavItem>
            <RouteNavItem id='serviceForm' to="/user/register">Registruoti klientą</RouteNavItem>
        </ul>
    </div>

);

export default navigationItems;
