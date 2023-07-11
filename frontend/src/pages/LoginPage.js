import {Button, Checkbox, Form, Input} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {Header} from "antd/es/layout/layout";

const LoginPage = () => {

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
            <Form
                name="basic"
                labelCol={{
                    span: 12,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 900,
                    position: 'absolute', left: '35%', top: '35%',
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                size="large"
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
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Header>
    );
};
export default LoginPage;
