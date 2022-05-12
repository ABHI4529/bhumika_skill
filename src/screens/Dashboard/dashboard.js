import "./dashboard.css";
import {useNavigate} from "react-router-dom";
import { auth, db } from "../../Firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import {collection, getDocs} from 'firebase/firestore';
import { useEffect, useState} from "react";
import SelectComponent from "./SelectComponent";


const Dashboard = ({UserData, SetIsAuth}) =>{
    const navigate = useNavigate();
    const [link, UpdateLink] = useState("");
    const [languageList, setLanguageList] = useState([]);
    const [domainList, setDomainList] = useState([]);
    var selectedVal = "";
    const [jobpositionList, setJobList] = useState([]);
    const collectionRef = collection(db, "Languages");
    const domainRef = collection(db, "Domain");
    const positionRef = collection(db, "Job Positions");

    useEffect(()=>{
        getLanguages();
        getDomains();
        getPositions();
    },[]);

    const setLinkToRoadmap = (e) =>{
        // selectedVal = e.target.value;
        console.log(selectedVal);
    }

    const getLanguages = async() =>{
        const data = await getDocs(collectionRef);
        setLanguageList(data.docs.map((docs)=>({...docs.data(), id: docs.id })))
    }

    const getPositions = async() => {
        const data = await getDocs(positionRef);
        setJobList(data.docs.map((docs) => ({...docs.data(), id: docs.id})))
    }

    const getDomains = async() => {
        const data = await getDocs(domainRef);
        setDomainList(data.docs.map((docs)=>({...docs.data(), id: docs.id})))
    }

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
            <div className="data">
                <div className="languages">
                    <h1>Languages</h1>
                    <SelectComponent updateLink={UpdateLink} optionData={languageList}/>
                </div>
                <div className="domains">
                <h1>Domains</h1>
                    <select  className="comboBox" placeholder="Choose" name="Languages">
                        {domainList.map((dom) => {
                            return <option value={dom.Domain} >{dom.Domain}</option>
                        })}
                    </select>
                </div>
                <div className="jobs">
                <h1>Job Position</h1>
                    <select className="comboBox" placeholder="Choose" name="Languages">
                        {
                            jobpositionList.map((job) => {
                                return <option value={job.job_position}>{job.job_position}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <a className="road-button" target={"_blank"} href={link}>Get Road Map</a>
        </div>
    )
}

export default Dashboard;