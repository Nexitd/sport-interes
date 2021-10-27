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
import HomePage from "../containers/HomePage";
import Header from "../containers/Header";
import Tournir from "../containers/Tournir";
import Profile from "../containers/Profile";
import Footer from "../containers/Footer/Footer";
import Rooms from "../containers/Rooms/Rooms";
import TournirChampionship from "../containers/TournirChampion/TournirChampionship";
import Matches from "../containers/Matches/Mathes";

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
    path: `${routes.turnir}/:id`,
    component: <TournirChampionship />,
  },
  {
    path: routes.matches,
    component: <Matches />,
  },
  {
    path: `${routes.profile}/:id`,
    component: <Profile />,
  },
];

const componentRoutePrivate = [
  {
    path: routes.profile,
    component: <Profile />,
    exact: true,
  },
  {
    path: routes.rooms,
    component: <Rooms />,
  },
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
          <div
            style={{
              flexGrow: 1,
              backgroundColor: "#f4f4f4",
            }}
          >
            <Switch>
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
            </Switch>
          </div>
          <Footer />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routers;
