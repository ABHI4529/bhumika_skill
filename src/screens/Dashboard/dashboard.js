import "./dashboard.css";
import {useNavigate} from "react-router-dom";
import { auth, db } from "../../Firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import {collection, getDocs} from 'firebase/firestore';
import { useEffect, useState, setState } from "react";


const Dashboard = ({UserData, SetIsAuth}) =>{
    const navigate = useNavigate();
    let selected = "";
    const [languageList, setLanguageList] = useState([]);
    const collectionRef = collection(db, "Languages");

    useEffect(()=>{
        getLanguages();
    },[]);

    const getLanguages = async() =>{
        const data = await getDocs(collectionRef);
        setLanguageList(data.docs.map((docs)=>({...docs.data(), id: docs.id })))
    }

    const logout= async () =>{
        await signOut(auth);
        window.localStorage.setItem("isAuth", false);
        SetIsAuth(false)
        navigate("/");
    }
    const setSelected = ({selectedItem})=>{
        setState((prevState) => {
            selected = selectedItem;
            console.log(selectedItem);          
        })
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
            <div className="data">
                <div className="languages">
                    <h1>Languages</h1>
                    <select className="comboBox" placeholder="Choose" name="Languages">
                        {languageList.map((lang)=>{
                            return <option value={lang.language} onClick={setSelected}>{lang.language}</option>
                        })}
                    </select>
                </div>
                <div className="domains">
                <h1>Domains</h1>
                    <select className="comboBox" placeholder="Choose" name="Languages">
                        <option value="java">Web Development</option>
                        <option value="Python">Android Development</option>
                    </select>
                </div>
                <div className="jobs">
                <h1>Job Position</h1>
                    <select className="comboBox" placeholder="Choose" name="Languages">
                        <option value="java">Data Analytic Engineer</option>
                        <option value="Python">Data Scentist Engineer</option>
                    </select>
                </div>
            </div>
            <a className="road-button" href={selected}>Get Road Map</a>
        </div>
    )
}

export default Dashboard;