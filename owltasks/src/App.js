import {Routes, Route, useNavigate} from 'react-router-dom';
import React from "react";
import {Header} from "antd/es/layout/layout";
import {Button, Layout} from "antd";

export default function App() {
  const navigate = useNavigate();

  const navigateLog = () => {
    navigate('/login');
  };

  return (
      <Layout className="layout" style={{padding: "-10px"}}>
        <div className="App">
          <Header style={{display: 'flex', alignItems: 'center', backgroundColor: "#423189", justifyContent: 'flex-start'}}>
            <h1 style={{color: "white"}}>TaskOwl</h1>
            <Button className="RegButton" style={{marginLeft: 'auto'}}>Регистрация</Button>
            <Button type="primary" style={{marginLeft: "10px"}} onClick={navigateLog}>Вход</Button>
          </Header>

          <Routes>
            <Route exact path="/login" element={<LogIn/>}/>
          </Routes>
        </div>
      </Layout>
  );
}

function LogIn() {
  return <h2>Заходи</h2>;
}
