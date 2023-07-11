import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import React from "react";

const NotFoundPage = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Такой страницы нет =("
            extra={<Button type="primary"><Link to="/">Домой</Link></Button>}
            style={{background: "rgb(256, 256, 256, 0.5)", width: "400px", margin: "auto", borderRadius: "50%"}}
        />
    )
}

export default NotFoundPage;