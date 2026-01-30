// import profile from './placeholder.jpg';
// import appStoreLogo from './apple_store.png';

// import Flipping from './Flipping.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const AMAYA = 0;
const MITCH = 1;
var lightMode = false;

function toggleMode() {
    var element = document.body;
    lightMode = !lightMode;
    element.classList.toggle("light-mode");
}

function Home() {
    return (
        <div class="main-container">
            <h1>Home</h1>
        </div>
    );
}

// TODO AMAYA: make login real pretty like you :) 
function Login() {
    return (
        <div class="main-container">
          <div class="content-container">
            <h1>On Air</h1>
            <div>
              <input></input>
              <input></input>
              <button class="login-button">login</button>
            </div>
          </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            {/* <div class="topnav">
                {window.innerWidth > 500 ?
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    : null
                }
                <label class="switch">
                    <input type="checkbox" onClick={toggleMode} />
                    <span class="slider round"></span>
                </label>
            </div> */}
            <div>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
