import { useLocation } from 'react-router-dom';
import { Header } from "antd/es/layout/layout";
import { Card, Checkbox, Collapse, Menu } from "antd";
import React, { useState, useEffect } from 'react';
import { FolderOutlined, SnippetsOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Panel } = Collapse;

const BinPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [collapsed] = useState(false);
    const [binCategories, setBinCategories] = useState([]);

    useEffect(() => {
        if (location.state && location.state.deletedCategory) {
            const deletedCategory = location.state.deletedCategory;
            setBinCategories([...binCategories, deletedCategory]);
        }
    }, [location.state, binCategories]);

    const handleToggleCardContent = (categoryId) => {
        const updatedCategories = binCategories.map(category => {
            if (category.id === categoryId) {
                return {
                    ...category,
                    showCardContent: !category.showCardContent
                };
            } else {
                return {
                    ...category,
                    showCardContent: false
                };
            }
        });
        setBinCategories(updatedCategories);
    };

    return (
        <div>
            <Header
                style={{ display: 'flex', alignItems: 'center', backgroundColor: "#423189", justifyContent: 'flex-start' }}
            >
                <img
                    src={require("../images/head_owl.png")}
                    style={{ alignSelf: "center", backgroundColor: "transparent", cursor: "pointer" }}
                    width={"45px"}
                    onClick={() => navigate('/')}
                    alt=""
                />
                <h1 style={{ color: "white", cursor: "pointer" }} onClick={() => navigate('/')}>
                    TaskOwl
                </h1>

                <Menu
                    className="menu"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={collapsed}
                    style={{
                        color: "black",
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
                    <Menu.Item icon={<SnippetsOutlined />} onClick={() => navigate("/workspace/my_tasks")}>
                        <p>Мои задачи</p>
                    </Menu.Item>
                    <Menu.Item icon={<FolderOutlined />} onClick={() => navigate("/workspace/archive")}>
                        <p>Архив</p>
                    </Menu.Item>
                    <Menu.Item icon={<DeleteOutlined />} onClick={() => navigate("/workspace/bin")}>
                        <p>Корзина</p>
                    </Menu.Item>
                </Menu>
            </Header>

            <div style={{ display: "flex", flexWrap: "wrap", marginTop: 10, position: "absolute", left: "25%" }}>
                {binCategories.map((category, index) => (
                    <Card key={index} style={{ width: 300, margin: 10, borderColor: "black" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderColor: "black" }}>
                            <h3 style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{category.name}</h3>
                        </div>

                        <Collapse
                            activeKey={category.showCardContent ? "content" : null}
                            onChange={() => handleToggleCardContent(category.id)}
                        >
                            <Panel header="Содержимое категории" key="content">
                                {category.subTasks.map((subTask, subIndex) => (
                                    <Card key={subIndex} style={{ marginBottom: 10 }}>
                                        <h4 style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{subTask.title}</h4>
                                        <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{subTask.description}</p>
                                        <Checkbox disabled={true}>Завершено</Checkbox>
                                    </Card>
                                ))}
                            </Panel>
                        </Collapse>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default BinPage;
