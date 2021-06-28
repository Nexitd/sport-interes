import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { sportTypes } from "../../Utils/sportTypes";
import routes from "../../routing/routes";
import TournirPage from "../../Components/Tournir/TournirPage";

const Tournir = ({ type }) => {
  return (
    <div style={{ maxWidth: 1440, margin: '20px auto' }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={routes.main}>Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link>{sportTypes[type]}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <TournirPage />
    </div>
  );
};

export default Tournir;
