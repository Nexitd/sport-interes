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

export const dataSource = [
  {
    key: "1",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "2",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "3",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "4",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "5",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "6",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
];

export const columns = [
  {
    title: "",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Название команды",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "И",
    dataIndex: "firstCol",
    key: "firstCol",
  },
  {
    title: "В",
    dataIndex: "secondCol",
    key: "secondCol",
  },
  {
    title: "Н",
    dataIndex: "thirdCol",
    key: "thirdCol",
  },
  {
    title: "П",
    dataIndex: "fourthCol",
    key: "fourthCol",
  },
  {
    title: "З",
    dataIndex: "fifthCol",
    key: "fifthCol",
  },
  {
    title: "П",
    dataIndex: "sixCol",
    key: "sixCol",
  },
  {
    title: "+/-",
    dataIndex: "sevenCol",
    key: "sevenCol",
  },
  {
    title: "0",
    dataIndex: "eightCol",
    key: "eightCol",
  },
];
