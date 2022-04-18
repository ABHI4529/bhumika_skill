import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import HomePage from './screens/HomePage/homepage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
