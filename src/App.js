import React from "react";
import { Provider } from "react-redux";
import Routers from "./routing/router";
import store from "./store/store";
import "antd/dist/antd.css";
import "./App.css";
import "./assets/styles/style.css";

const App = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;
