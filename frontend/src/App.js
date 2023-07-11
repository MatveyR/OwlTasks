import {Routes, Route} from 'react-router-dom';
import React from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import WorkspacePage from "./pages/WorkspacePage";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${require('./App.css')}
`;

export default function App() {
   return (
      <div>
         <Routes>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/registration" element={<RegistrationPage/>}/>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/workspace" element={<WorkspacePage/>}/>
         </Routes>
      </div>
   );
}
