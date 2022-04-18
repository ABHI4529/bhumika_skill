import { Component } from "react";
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
                <a>Home</a>
                <a>About</a>
                <button>Login</button>
            </nav>
        );
    }
}

export default NavBar;