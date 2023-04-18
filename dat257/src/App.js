import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Statistics from './pages/Statistics';

export default function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/statistics" element={<Statistics/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}