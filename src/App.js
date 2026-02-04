import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

const AMAYA = 0;
const MITCH = 1;
var lightMode = false;

var loggedInUser;
var yourOnAirStatus = false;
var otherOnAirStatus = false;

// fetch('http://localhost:3001/api/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     });

function toggleMode() {
    var element = document.body;
    lightMode = !lightMode;
    element.classList.toggle("light-mode");
}

function getOnAirStatus(loggedInUser) {
    // this.loggedInUser = loggedInUser;

    // this.yourOnAirStatus = this.loggedInUser.isOnAir;
    // TODO: get others status via call to db eventually
    // this.otherOnAirStatus = false;
}

function setYourStatus() {
    this.yourOnAirStatus = !this.yourOnAirStatus;
    // TODO: update status on db via call
    //
}

function Home() {
    document.body.className = "home-background";
    return (
        <div class="home-background">
            <div class="home-container">
                {/* background is a purple to dark green hue shift */}
                <div class="content-container">
                    {/* two buttons, one circular and large on top, other below rounded rectangle button */}
                    {/* top one is others status, bottom is yours and it changeable */}
                    <div class="status-button-container">
                        <button class="other-status-button">Other Status</button>
                    </div>

                    <div class="status-button-container">
                        <button class="your-status-button mitch-button off-air">Your Status</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// TODO AMAYA: make login real pretty like you :) 
function Login() {

    const navigate = useNavigate();

    const handleLogin = async () => {
        const success = true; //await loginUser(); // your auth logic

        if (success) {
            navigate('/home', { replace: true });
            getOnAirStatus(); // needs active user to pass in
        }
    };

    return (
        <div class="main-container">
            <div class="content-container">
                <h1>On Air</h1>
                <div class="login-container">
                    <input placeholder='username'></input>
                    <input placeholder='password'></input>
                    <button onClick={handleLogin}>login</button>
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
