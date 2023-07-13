import { useNavigate } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import { Button, Menu, Card, Input, Checkbox, Collapse, message } from "antd";
import React, { useState } from 'react';
import { FolderOutlined, DeleteOutlined, SnippetsOutlined, EditOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const { TextArea } = Input;
const { Panel } = Collapse;

const MyTasksPage = () => {
    const navigate = useNavigate();
    const [collapsed] = useState(false);
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [subTasks, setSubTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [editingCategoryIndex, setEditingCategoryIndex] = useState(-1);

    const handleAddCategory = () => {
        setShowAddCategory(true);
    };

    const handleCategoryNameChange = (e) => {
        setCategoryName(e.target.value);
    };

    const handleAddSubTask = () => {
        const newSubTask = { title: "", description: "", completed: false };
        setSubTasks([...subTasks, newSubTask]);
    };

    const handleSubTaskTitleChange = (e, index) => {
        const updatedSubTasks = [...subTasks];
        updatedSubTasks[index].title = e.target.value;
        setSubTasks(updatedSubTasks);
    };

    const handleSubTaskDescriptionChange = (e, index) => {
        const updatedSubTasks = [...subTasks];
        updatedSubTasks[index].description = e.target.value;
        setSubTasks(updatedSubTasks);
    };

    const handleSubTaskDeleteChange = (e, index) => {
        const updatedSubTasks = [...subTasks];
        updatedSubTasks.splice(index, 1);
        setSubTasks(updatedSubTasks);
    };

    const handleSaveCategory = () => {
        const newCategory = { id: uuidv4(), name: categoryName, subTasks: subTasks };
        if (editingCategoryIndex !== -1) {
            const updatedCategories = [...categories];
            updatedCategories[editingCategoryIndex] = newCategory;
            setCategories(updatedCategories);
        } else {
            setCategories([...categories, newCategory]);
        }
        setShowAddCategory(false);
        setCategoryName('');
        setSubTasks([]);
        setEditingCategoryIndex(-1);
    };

    const handleEditCategory = (index) => {
        const category = categories[index];
        setCategoryName(category.name);
        setSubTasks(category.subTasks);
        setEditingCategoryIndex(index);
        setShowAddCategory(true);
    };

    const handleDeleteCategory = (index) => {
        const deletedCategory = categories[index];
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
        navigate('/workspace/bin', { state: { deletedCategory } });
    };

    const handleDeleteSubTask = (categoryIndex, subTaskIndex) => {
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].subTasks.splice(subTaskIndex, 1);
        setCategories(updatedCategories);
        message.info("Задача удалена!");
    };

    const handleToggleCardContent = (categoryId) => {
        const updatedCategories = categories.map(category => {
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
        setCategories(updatedCategories);
    };

    return (
        <div>
            <Header
                style={{ display: 'flex', alignItems: 'center', backgroundColor: "#423189" }}
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

                <Button
                    type="primary"
                    style={{
                        color: "whitesmoke",
                        left: "35%"
                    }}
                    onClick={handleAddCategory}
                >
                    Добавить новую категорию
                </Button>

                <Menu
                    className="menu"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={collapsed}
                    style={{
                        color: "black",
                        position: "absolute",
                        left: 0,
                        top: "64px",
                        right: "16px",
                        backgroundColor: "rgb(221, 160, 221, 0.5)",
                        width: "35vh",
                        height: "100vh",
                        border: "rgb(221, 160, 221, 1)",
                        borderStyle: "double",
                        borderWidth: "10px",
                        zIndex: 1
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

            {showAddCategory && (
                <Card
                    title={editingCategoryIndex !== -1 ? "Редактировать категорию" : "Добавить категорию"}
                    style={{ width: 400, margin: "0 auto", marginTop: 20, borderColor: "black" }}
                >
                    <Input
                        value={categoryName}
                        onChange={handleCategoryNameChange}
                        placeholder="Название категории"
                        style={{ marginBottom: 10 }}
                    />

                    {subTasks.map((subTask, index) => (
                        <Card key={index} style={{ marginBottom: 10 }}>
                            <Input
                                value={subTask.title}
                                onChange={(e) => handleSubTaskTitleChange(e, index)}
                                placeholder="Название вложенной карточки"
                                style={{ marginBottom: 10, overflow: "hidden", textOverflow: "ellipsis" }}
                            />
                            <TextArea
                                value={subTask.description}
                                onChange={(e) => handleSubTaskDescriptionChange(e, index)}
                                placeholder="Описание вложенной карточки"
                                autoSize={{ minRows: 2, maxRows: 6 }}
                                style={{ marginBottom: 10, overflow: "hidden", textOverflow: "ellipsis" }}
                            />
                            <Checkbox>Завершено</Checkbox>
                            <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                                size="small"
                                onClick={(e) => handleSubTaskDeleteChange(e, index)}
                            />
                        </Card>
                    ))}

                    <Button type="primary" onClick={handleAddSubTask} style={{ marginBottom: 10 }}>
                        Добавить вложенную карточку
                    </Button>

                    <Button type="primary" onClick={handleSaveCategory}>
                        {editingCategoryIndex !== -1 ? "Сохранить изменения" : "Сохранить категорию"}
                    </Button>
                </Card>
            )}

            <div style={{ display: "flex", flexWrap: "wrap", marginTop: 10, position: "absolute", left: "25%" }}>
                {categories.map((category, index) => (
                    <Card key={index} style={{ width: 300, margin: 10, borderColor: "black" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderColor: "black" }}>
                            <h3 style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{category.name}</h3>
                            <div>
                                <Button
                                    type="primary"
                                    shape="circle"
                                    icon={<EditOutlined />}
                                    size="small"
                                    onClick={() => handleEditCategory(index)}
                                    style={{ marginRight: 10 }}
                                />
                                <Button
                                    type="primary"
                                    shape="circle"
                                    icon={<FolderOutlined />}
                                    size="small"
                                    style={{ marginRight: 10 }}
                                />
                                <Button
                                    type="primary"
                                    danger
                                    shape="circle"
                                    icon={<DeleteOutlined />}
                                    size="small"
                                    onClick={() => handleDeleteCategory(index)}
                                />
                            </div>
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
                                        <Checkbox>Завершено</Checkbox>
                                        <Button
                                            type="primary"
                                            danger
                                            shape="circle"
                                            icon={<DeleteOutlined />}
                                            size="small"
                                            onClick={() => handleDeleteSubTask(index, subIndex)}
                                        />
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

export default MyTasksPage;
