import {Button, Checkbox, Form, Input, message} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import authService from "../services/auth.service";

const LoginPage = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        authService.register(values);
        message.success("Вы успешно вошли");
        navigate("/workspace/my_tasks");
    };

    function Logined() {
        message.success("Вы успешно вошли!");
        navigate("/workspace/my_tasks");
    }

    return (
        <Header
            style={{display: 'flex', alignItems: 'center', backgroundColor: "#423189", justifyContent: 'flex-start'}}>
            <img src={require("../images/head_owl.png")}
                 style={{alignSelf: "center", backgroundColor: "transparent", cursor: "pointer"}}
                 width={"45px"}
                 onClick={() => navigate('/')}
            />
            <h1 style={{color: "white", cursor: "pointer"}} onClick={() => navigate('/')}>TaskOwl</h1>
            <Form
                className="login_form"
                name="basic"
                labelCol={{
                    span: 12,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 900,
                    position: 'fixed', left: '35%', top: '35%',
                    border: "5px",
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                size="large"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Логин"
                    name="логин"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите логин!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >

                    <Link to="/registration"
                          style={{padding: "10px"}}>
                        Нет аккаунта?
                    </Link>
                    <Button type="primary" htmlType="submit" onClick={Logined}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Header>
    );
};
export default LoginPage;
