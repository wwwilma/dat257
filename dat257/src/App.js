import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Login from './pages/Login'
import Menu from './Menu';
import Header from "./Header";
import React from "react";
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div>
          <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <Header />
          <Footer />
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/statistics" element={<Statistics/>} />
        <Route path="/login" element={<Home/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}