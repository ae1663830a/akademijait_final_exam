import React from "react";
import {NavLink} from "react-router-dom";

import './RouteNavItem.css';

export default props =>
    <li className="NavigationItem">
        <NavLink
            id={props.id}
            to={props.to}
            exact={props.exact}
            activeClassName="active">
            {props.children}
        </NavLink>
    </li>;
