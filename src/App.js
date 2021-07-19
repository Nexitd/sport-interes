import React from "react";
import { Provider, useDispatch } from "react-redux";
import Routers from "./routing/router";
import store from "./store/store";
import "antd/dist/antd.css";
import "./App.css";
import "./assets/styles/style.css";

const App = () => {
  const dispatch = useDispatch();
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;
