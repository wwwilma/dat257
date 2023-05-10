import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Login from './pages/Login'
import Menu from './Menu';
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import AllHabits from "./pages/AllHabits";
import AboutUs from './pages/AboutUs';
import Information from './pages/Information';
import Profile from "./Profile";

export default function App() {
    const [userID, setUserID] = useState(0);

    function handleUserChange(newUserID) {
        setUserID(newUserID);
    }

    return (
        <BrowserRouter>
            <div>
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} userID = {userID}/>
                <Header />
                <div class="pages">
                <Routes>
                    <Route exact path="/" element={<Login onUserChange={handleUserChange} userID = {userID}/>}/>
                    <Route path="/statistics" element={<Statistics userID = {userID}/>} />
                    <Route path="/Home" element={<Home userID = {userID}/>} />
                    <Route path="/allhabits" element={<AllHabits userID = {userID}/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/information" element={<Information/>} />
                </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
