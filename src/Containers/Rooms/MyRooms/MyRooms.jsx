import React from "react";
import { Row } from "antd";
import edit from "../../../assets/images/RoomCard/edit 9.svg";
import inf from "../../../assets/images/RoomCard/Group 490.svg";
import RoomCard from "../../../Components/RoomCard/RoomCard";

const RoomInfo = [
  {
    id: 0,
    title: "Адские псы",
    edit: <img src={edit} alt="edit" />,
    moreInf: <img src={inf} alt="info" />,
    members: 23,
  },
  {
    id: 1,
    title: "Спорт",
    edit: <img src={edit} alt="edit" />,
    moreInf: <img src={inf} alt="info" />,
    members: 24,
  },
  {
    id: 2,
    title: "Писька",
    edit: <img src={edit} alt="edit" />,
    moreInf: <img src={inf} alt="info" />,
    members: 2,
  },
  {
    id: 3,
    title: "З О Ж",
    edit: <img src={edit} alt="edit" />,
    moreInf: <img src={inf} alt="info" />,
    members: 3,
  },
];

const MyRooms = () => {
  return (
    <Row>
      {RoomInfo.map((item) => (
        <RoomCard
          key={item.id}
          edit={item.edit}
          members={item.members}
          title={item.title}
          moreInf={item.moreInf}
        />
      ))}
    </Row>
  );
};

export default MyRooms;
