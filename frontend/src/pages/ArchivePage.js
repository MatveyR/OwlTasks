import {useNavigate} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import {Menu} from "antd";
import React, { useState } from 'react';
import {
    FolderOutlined,
    DeleteOutlined,
    SnippetsOutlined
} from '@ant-design/icons';

const ArchivePage = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Header
            style={{display: 'flex', alignItems: 'center', backgroundColor: "#423189", justifyContent: 'flex-start'}}>
            <img src={require("../images/head_owl.png")}
                 style={{alignSelf: "center", backgroundColor: "transparent", cursor: "pointer"}}
                 width={"45px"}
                 onClick={() => navigate('/')}
                 alt=""
            />
            <h1 style={{color: "white", cursor: "pointer"}} onClick={() => navigate('/')}>TaskOwl</h1>

            <Menu
                className="menu"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                style={{color: "black",
                    position: "fixed",
                    left: 0,
                    top: "64px",
                    right: "16px",
                    backgroundColor: "rgb(221, 160, 221, 0.5)",
                    width: "35vh",
                    height: "100vh",
                    border: "rgb(221, 160, 221, 1)",
                    borderStyle: "double",
                    borderWidth: "10px"
                }}
            >
                <Menu.Item icon={<SnippetsOutlined/>} onClick={() => navigate("/workspace/my_tasks")}>
                    <p>Мои задачи</p>
                </Menu.Item>
                <Menu.Item icon={<FolderOutlined/>} onClick={() => navigate("/workspace/archive")}>
                    <p>Архив</p>
                </Menu.Item>
                <Menu.Item icon={<DeleteOutlined/>} onClick={() => navigate("/workspace/bin")}>
                    <p>Удалённое</p>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default ArchivePage;