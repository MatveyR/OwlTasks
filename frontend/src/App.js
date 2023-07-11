import {Routes, Route} from 'react-router-dom';
import React from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";

export default function App() {
   return (
      <Routes>
         <Route exact path="/login" element={<LoginPage/>}/>
         <Route exact path="/registration" element={<RegistrationPage/>}/>
         <Route exact path="/" element={<HomePage/>}/>
      </Routes>
   );
}
