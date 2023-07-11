import {Button, Form, Input, message} from 'antd';
import authService from "../services/auth.service";
import {Link, useNavigate} from "react-router-dom";
import {Header} from "antd/es/layout/layout";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationPage = () => {
    const navigate = useNavigate();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        authService.register(values)
        message.success("Вы успешно зарегистрировались!");
        navigate("/workspace/my_tasks")
    };

    function Registered() {
        message.success("Вы успешно зарегистрировались!");
        navigate('/workspace/my_tasks');
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
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                    position: 'absolute', left: '35%', top: '35%',
                }}
                scrollToFirstError
                size="large"
            >
                <Form.Item
                    name="username"
                    label="Логин"
                    rules={[
                        {
                            required: true,
                            whitespace: true,
                            message: "Пожалуйста, введите логин!"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                        },
                        {
                            required: true,
                            message: 'Пожалуйста, введите почту!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Link to="/login"
                          style={{padding: "30px"}}>
                        Уже есть аккаунт?
                    </Link>
                    <Button type="primary" htmlType="submit" onClick={Registered}>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </Header>
    );
};

export default RegistrationPage;
