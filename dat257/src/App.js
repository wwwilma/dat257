import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Menu from './Menu';
import CardGrid from "./CardGrid";
import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import AllHabits from "./pages/AllHabits";

export default function App() {
  return (
    <BrowserRouter>
      <div>
          <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <Header />
          <Footer />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/statistics" element={<Statistics/>} />
        <Route path="/allhabits" element={<AllHabits/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}