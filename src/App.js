import React from "react";
import { Provider } from "react-redux";
import Routers from "./routing/router";
import store from "./store/store";
import AuthProvider from "./Utils/AuthProvider";
import "antd/dist/antd.css";
import "./App.css";
import "./assets/styles/style.css";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </Provider>
  );
};

export default App;
