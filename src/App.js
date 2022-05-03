import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header";
import Input from './components/Input/Input';
import MainScreen from './components/MainScreen/MainScreen';
import RecipeCard from './components/RecipeCard/RecipeCard';
import SingIn from './components/Registration/SingIn';
import SingUp from './components/Registration/SingUp';
import Search from "./components/Search/Search";

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainScreen/>}/>
        <Route path="/singIn" element={<SingIn/>}/>
        <Route path="/singUp" element={<SingUp/>}/>
        <Route path="/searchPage" element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
