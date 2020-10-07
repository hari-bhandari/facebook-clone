import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Login from "./components/auth/Login/Login";
import AuthState from "./context/auth/AuthState";
function App() {
  return (
      <AuthState>
    <div className="App">

    <Header/>
    <Login/>
    {/*App Body*/}
      {/*  SideBar*/}
      {/*Feed*/}
      {/*Widgets*/}
    </div>
      </AuthState>
  );
}

export default App;
