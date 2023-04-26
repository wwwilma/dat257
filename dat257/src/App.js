import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Login from './pages/Login'
import Menu from './Menu';
import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";

export default function App() {
    const [userID, setUserID] = useState(0);

    function HandleUserChange(newUserID){
        setUserID(newUserID)
        console.log(userID)
    }

  return (
    <BrowserRouter>
      <div>
          <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <Header />
          <Footer />
      <Routes>
        <Route exact path="/" element={<Login onUserChange={HandleUserChange}/>} />
        <Route path="/statistics" element={<Statistics/>} />
        <Route path="/login" element={<Home/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}