import { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


class NavBar extends Component{
    render(){
        return(
            <nav>
                <div className="logo">
                    <h1 className="hed_1">Skill</h1>
                    <h1 className="hed_2">Adhyan</h1>
                </div>
                <div className="search">
                    <input placeholder="Search Courses"></input>
                </div> 
                <div className="menu">
                    <a>Home</a>
                    <a>About</a>
                </div>
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
            </nav>
        );
    }
}

export default NavBar;