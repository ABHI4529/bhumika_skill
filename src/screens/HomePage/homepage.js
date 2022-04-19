import { Component } from "react";
import "./homepage.css"
import NavBar from "../../components/navbar/navbar";
import logoComp from "../../assets/home_comp.png";

class HomePage extends Component{
    render() {
        return (
             <div className="homepage">
                 <NavBar></NavBar>
                 <div className="options">
                     <a>Languages</a>
                     <a>Courses</a>
                     <a>Job Position</a>
                 </div>
                 <main>
                    <div className="logo-header">
                        <img src={logoComp} alt="logo-component"></img>
                        <h1>Fun Way Of
                            Learning New
                            Skills
                        </h1>
                        <button>Get Started</button>
                    </div>
                    <form className="register-form">
                        <p>Contact Us</p>
                        <div className="form-input-data">
                            <input type={"email"} placeholder="Email"></input>
                            <input type={"tel"} placeholder="Contact Number (optional)"></input>
                            <textarea placeholder="Message"></textarea>
                            <button>Send</button>
                        </div>
                    </form>
                 </main>
             </div>
        );
    }
}

export default HomePage;