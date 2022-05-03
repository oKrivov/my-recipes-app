import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Input from './components/Input/Input';
import SingIn from './components/Registration/SingIn';
import SingUp from './components/Registration/SingUp';
import Search from "./components/Search/Search";

function App() {

  return (
    <div className="app">
      <Header />
      {/* <Input/> */}
      {/* <SingIn/> */}
      {/* <SingUp/> */}
      <Search/>
    </div>
  );
}

export default App;
