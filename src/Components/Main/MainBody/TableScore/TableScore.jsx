import React from "react";
import s from "./TableScore.module.css";
import Button  from "../../../Button/Button";

const TableScore = () => {
    return (
        <div className={s.table}>
            <h3 className={s.table__title}>ТОП прогнозисты</h3>
            <table>
                <tr className={s.border__row}>
                    <td className={s.column__title}>Имя прогнозиста</td>
                    <td className={s.foot + " " + s.border}></td>
                    <td className={s.hoc + " " + s.border}></td>
                    <td className={s.bas + " " + s.border}></td>
                    <td className={s.column__title}>Итого</td>
                </tr>
                <tr>
                    <td className={s.column__text}>Сергей</td>
                    <td className={s.border}>34</td>
                    <td className={s.border}>102</td>
                    <td className={s.border}>230</td>
                    <td className={s.column__text + " " + s.bold__text}>340</td>
                </tr>
                <tr>
                    <td className={s.column__text}>Сергей</td>
                    <td className={s.border}>34</td>
                    <td className={s.border}>102</td>
                    <td className={s.border}>230</td>
                    <td className={s.column__text + " " + s.bold__text}>340</td>
                </tr>
                <tr>
                    <td className={s.column__text}>Сергей</td>
                    <td className={s.border}>34</td>
                    <td className={s.border}>102</td>
                    <td className={s.border}>230</td>
                    <td className={s.column__text + " " + s.bold__text}>340</td>
                </tr>
                <tr>
                    <td className={s.column__text}>Сергей</td>
                    <td className={s.border}>34</td>
                    <td className={s.border}>102</td>
                    <td className={s.border}>230</td>
                    <td className={s.column__text + " " + s.bold__text}>340</td>
                </tr>
            </table>

            <Button value="Все прогназисты" id="active"/>
        </div>
    );
};

export default TableScore;
