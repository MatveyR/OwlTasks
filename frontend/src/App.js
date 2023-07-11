import {Routes, Route, useNavigate} from 'react-router-dom';
import React from "react";
import {Header} from "antd/es/layout/layout";
import {Button} from "antd";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

export default function App() {
  const navigate = useNavigate();

  const navigateLog = () => {
    navigate('/login');
  };

  const navigateReg = () => {
      navigate('/registration');
  }

  return (
      <div className="App">
          <Header style={{display: 'flex', alignItems: 'center', backgroundColor: "#423189", justifyContent: 'flex-start'}}>
            <h1 style={{color: "white"}}>TaskOwl</h1>
            <Button style={{marginLeft: 'auto'}} onClick={navigateReg}>Регистрация</Button>
            <Button type="primary" style={{marginLeft: "10px"}} onClick={navigateLog}>Вход</Button>
          </Header>

          <Routes>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/registration" element={<RegistrationPage/>}/>
          </Routes>
      </div>
  );
}
