import React from "react";
import s from "./Main.Module.css";
import MainHeader from "./MainHeader/MainHeader";
import Prises from "./MainBody/Prises/Prises";
import MainTournir from "./MainBody/MainTournir/MainTournir";
import Points from "./MainBody/Points/Point";
import Rules from "./MainBody/Rules/Rules";
import TableScore from "./MainBody/TableScore/TableScore";
import { BrowserRouter } from "react-router-dom";

const Main = (props) => {
    return (
        <BrowserRouter>
            <div className={s.main}>
                <MainHeader />
                <div className={s.main__body}>
                    <Prises />
                    <div className={s.main__container}>
                        <div className={s.content}>
                            <MainTournir state={props.state} />
                            <Points state={props.state} />
                            <Rules state={props.state} />
                        </div>
                        <div className={s.table}>
                            <TableScore />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Main;
