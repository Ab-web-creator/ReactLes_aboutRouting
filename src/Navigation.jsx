
import React from 'react';
import { NavLink} from 'react-router-dom';
function Navigation() {
    return (
        <nav className={"navigatie"}>
            <ul>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/overview">Overview</NavLink> </li>
                <li> <NavLink to="/blog/1">Blog Post</NavLink> </li>
                <li> <NavLink to="/new-post">New Post</NavLink> </li>
            </ul>
        </nav>
    );
}

export default Navigation;
