import {useNavigate} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import {Menu} from "antd";
import React, { useState } from 'react';
import {
    FolderOutlined,
    DeleteOutlined,
    SnippetsOutlined
} from '@ant-design/icons';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Мои задачи', '1', <SnippetsOutlined />),
    getItem('Архив', '2', <FolderOutlined />),
    getItem('Удалённое', '3', <DeleteOutlined />),
];


const WorkspacePage = () => {
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
                items={items}
                style={{color: "black",
                    position: "fixed",
                    left: 0,
                    top: "64px",
                    right: "16px",
                    backgroundColor: "rgb(136, 179, 120, 0.5)",
                    width: "35vh",
                    height: "100vh",
                    borderColor: "rgb(136, 179, 120, 1)",
                    borderStyle: "double",
                    borderWidth: "10px"
                }}
            />
        </Header>
    );
}

export default WorkspacePage;