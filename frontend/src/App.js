import {Routes, Route} from 'react-router-dom';
import React from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import MyTasksPage from "./pages/MyTasksPage";
import BinPage from "./pages/BinPage";
import ArchivePage from "./pages/ArchivePage";
import NotFoundPage from "./pages/NotFoundPage";
import {createGlobalStyle} from 'styled-components';

createGlobalStyle `${require('./App.css')}`;

export default function App() {
   return (
      <div>
         <Routes>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/registration" element={<RegistrationPage/>}/>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/workspace/my_tasks" element={<MyTasksPage/>}/>
            <Route exact path="/workspace/archive" element={<ArchivePage/>}/>
            <Route exact path="/workspace/bin" element={<BinPage/>}/>
            <Route exact path="*" element={<NotFoundPage/>}/>
         </Routes>
      </div>
   );
}
