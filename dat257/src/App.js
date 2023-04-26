import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Login from './pages/Login'
import Menu from './Menu';
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

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
                <Footer />
                <Routes>
                    <Route exact path="/" element={<Login onUserChange={handleUserChange} userID = {userID}/>}/>
                    <Route path="/statistics" element={<Statistics userID = {userID}/>} />
                    <Route path="/Home" element={<Home userID = {userID}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
