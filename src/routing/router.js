import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import routes from "./routes";
import ErrorBoundary from "./ErrorBoundary";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../Containers/HomePage";
import Header from "../Containers/Header";
import Tournir from "../Containers/Tournir";
import Profile from "../Containers/Profile";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const componentRoute = [
  {
    path: routes.main,
    component: <HomePage />,
    exact: true,
  },
  {
    path: routes.football,
    component: <Tournir type="football" />,
  },
  {
    path: routes.basketball,
    component: <Tournir type="basketball" />,
  },
  {
    path: routes.hockey,
    component: <Tournir type="hockey" />,
  },
  {
    path: routes.profile,
    component: <Profile />,
  },
];

const componentRoutePrivate = [
  // {
  // 	path: routes.profile,
  // 	exact: true,
  // },
];

const Routers = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <Spin
            indicator={antIcon}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          />
        }
      >
        <Router>
          <Header />
          <Switch>
            <div
              style={{
                minHeight: "calc(100vh - 83px)",
                backgroundColor: "#f4f4f4",
              }}
            >
              {componentRoutePrivate.map((route, index) => (
                <PrivateRoute key={index} path={route.path} exact={route.exact}>
                  {route.component}
                </PrivateRoute>
              ))}
              {componentRoute.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact}>
                  {route.component}
                </Route>
              ))}
              <Route>
                <Redirect to={routes.main} />
              </Route>
            </div>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routers;
