import football from "../../assets/images/TableScore/Group.svg";
import hock from "../../assets/images/TableScore/Group 9.svg";
import basketball from "../../assets/images/TableScore/Group 176.svg";

export const col = [
  {
    title: "Имя пользователя",
    dataIndex: "name",
    key: "name",
  },
  {
    title: <img src={football} alt="" />,
    dataIndex: "footScore",
    key: "footScore",
  },
  {
    title: <img src={hock} alt="" />,
    dataIndex: "footScore",
    key: "footScore",
  },
  {
    title: <img src={basketball} alt="" />,
    dataIndex: "footScore",
    key: "footScore",
  },
  {
    title: "Итого",
    dataIndex: "address",
    key: "address",
  },
];
