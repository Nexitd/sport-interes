import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={s.btn + " " + s.bg} data-id={props.id}>
            {props.value}
        </button>
    );
};

export default Button;
