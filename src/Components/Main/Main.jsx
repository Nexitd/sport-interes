import React from "react";
import MainHeader from "./MainHeader/MainHeader";
import Prises from "./Prises/Prises";
import MainTournir from "./MainTournir/MainTournir";
import Points from "./Points/Point";
import Rules from "./Rules/Rules";
import TableScore from "../TableScore/TableScore";
import s from "./Main.Module.css";

const Main = () => (
  <>
    <MainHeader />
    <div className={s.main__body}>
      <Prises />
      <div className={s.main__container}>
        <div className={s.content}>
          <MainTournir />
          <Points />
          <Rules />
        </div>
        <div className={s.table}>
          <TableScore />
        </div>
      </div>
    </div>
  </>
);

export default Main;
