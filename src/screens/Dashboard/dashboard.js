import "./dashboard.css";
import {useNavigate} from "react-router-dom";
import { auth } from "../../Firebase/firebaseConfig";
import { signOut } from "firebase/auth";


const Dashboard = ({UserData, SetIsAuth}) =>{
    const navigate = useNavigate();
    const logout= async () =>{
        await signOut(auth);
        window.localStorage.setItem("isAuth", false);
        SetIsAuth(false)
        navigate("/");
    }
    return(
        <div className="dashboard">
            <nav className="appbar">
                <div className="logo">
                    <h1 className="hed_1">Skill</h1>
                    <h1 className="hed_2">Adhyan</h1>
                </div>
                <p>Hello, {UserData.email}</p>
                <img className="userImage" src={UserData.photoURL}></img>
            </nav>
        </div>
    )
}

export default Dashboard;