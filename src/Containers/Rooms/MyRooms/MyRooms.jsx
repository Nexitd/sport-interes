import React from "react";
import { Button, Collapse } from "antd";
import { ReactComponent as Ball } from "../../../assets/img/Ball.svg";
import { ReactComponent as BackArrowRoom } from "../../../assets/img/BackArrowRoom.svg";
import { ReactComponent as EditPancel } from "../../../assets/img/EditPancel.svg";
import styles from "./MyRooms.module.css";

const RoomInfo = [
  {
    id: 0,
    title: "Адские псы",
    members: 23,
  },
  {
    id: 1,
    title: "Спорт",
    members: 24,
  },
  {
    id: 2,
    title: "Писька",
    members: 2,
  },
  {
    id: 3,
    title: "З О Ж",
    members: 1,
  },
];

const toggleButton = ({ isActive }) =>
  isActive ? <BackArrowRoom /> : <Ball />;

const Header = ({ name, members }) => (
  <div className={styles.test}>
    <div>
      <Button type="text" shape="circle" icon={<EditPancel />} />
      {name}
    </div>
    <div>
      {members} участник{members > 1 && "a"}
    </div>
  </div>
);

const MyRooms = () => {
  return (
    <>
      <Collapse
        expandIconPosition="right"
        bordered={false}
        expandIcon={toggleButton}
        accordion
      >
        {RoomInfo.map((room) => (
          <Collapse.Panel
            header={<Header name={room.title} members={room.members} />}
            key={room.id}
          >
            <p>fghfgh</p>
          </Collapse.Panel>
        ))}
      </Collapse>
    </>
  );
};

export default MyRooms;
