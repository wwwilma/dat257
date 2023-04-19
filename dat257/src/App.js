//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Menu from './Menu';

export default function App() {
  return (
    <BrowserRouter>
      <div>
          <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/statistics" element={<Statistics/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}