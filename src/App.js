import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Navbar from './components/Navbar';
import Activity from "./components/Activity";
import Profile from "./components/Profile";
import Quotes from "./components/Quotes";
import Search from "./components/Search/Search";
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
