import React from "react";
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <nav style={{backgroundColor: 'rgb(70,72,75)'}} className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand text-white">Navbar</Link>
        </nav>
    )
}
