import React from "react";
import { Table, Button } from "antd";
import { columns } from "./columns";
import s from "./TableScore.module.css";

const TableScore = ({ title = 'ТОП прогнозисты', btnText = "Все прогназисты" }) => {
    return (
        <div className={s.table}>
            <h3 className={s.table__title}>{title}</h3>
            <Table columns={columns} />
            <Button shape='round'>
                {btnText}
            </Button>
        </div>
    );
};

export default TableScore;
