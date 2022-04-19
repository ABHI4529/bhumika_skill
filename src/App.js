import './App.css';
import NavBar from './components/navbar/navbar';
import HomePage from './screens/HomePage/homepage';
import Login from './screens/Login/Login';
import Dashboard  from './screens/Dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';
import {auth} from "./Firebase/firebaseConfig";
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [isAuth, SetIsAuth] = useState(false);
  const [userData, SetUserData] = useState([]);

  onAuthStateChanged(auth, (currentUser) =>{
    SetUserData(currentUser);
    SetIsAuth(true);
  })

  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>}/>
          <Route exact path="/login" element={<Login SetUserData={SetUserData} SetIsAuth={SetIsAuth}/>}/>
          <Route exact path="/dashboard" element={!isAuth ? <Login/> : <Dashboard UserData={userData} SetIsAuth={SetIsAuth}/>}/>
        </Routes>
      </div>
  );
}

export default App;
