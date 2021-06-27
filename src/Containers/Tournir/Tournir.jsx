import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { sportTypes } from "../../Utils/sportTypes";
import routes from "../../routing/routes";

const Tournir = ({ type }) => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={routes.main}>Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link>{sportTypes[type]}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Tournir;
