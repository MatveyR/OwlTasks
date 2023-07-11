import {Header} from "antd/es/layout/layout";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Header
            style={{display: 'flex', alignItems: 'center', backgroundColor: "#423189", justifyContent: 'flex-start'}}>
            <img src={require("../images/head_owl.png")}
                 style={{alignSelf: "center", backgroundColor: "transparent", cursor: "pointer"}}
                 width={"45px"}
                 onClick={() => navigate('/')}
            />
            <h1 style={{color: "white", cursor: "pointer"}} onClick={() => navigate('/')}>TaskOwl</h1>
            <Button style={{marginLeft: 'auto'}} onClick={() => navigate('/registration')}>Регистрация</Button>
            <Button type="primary" style={{marginLeft: "10px"}} onClick={() => navigate('/login')}>Вход</Button>
        </Header>
    );
}

export default HomePage;