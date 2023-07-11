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

   const navigateHome = () => {
      navigate('/');
   }

   return (
      <div className="App">
         <Header style={{display: 'flex', alignItems: 'center', backgroundColor: "#423189", justifyContent: 'flex-start'}}>
            <img src={require("./images/img_3.png")}
                 style={{alignSelf: "center", backgroundColor: "transparent"}}
                 width={"45px"}
                 onClick={navigateHome}
            />
            <h1 style={{color: "white"}} onClick={navigateHome}>TaskOwl</h1>
            <Button style={{marginLeft: 'auto'}} onClick={navigateReg}>Регистрация</Button>
            <Button type="primary" style={{marginLeft: "10px"}} onClick={navigateLog}>Вход</Button>
         </Header>


         <Routes>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/registration" element={<RegistrationPage/>}/>
            <Route exact path="/" element={<div/>}/>
         </Routes>
      </div>
   );
}
