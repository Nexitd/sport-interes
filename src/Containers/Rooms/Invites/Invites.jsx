import React from "react";
import { Row } from "antd";
import InviteCard from "../../../Components/InviteCard/InviteCard";


const InviteInfo = [
  {
      id: 0,
      title: 'Адские псы',
      name: 'Сергей',
      date: '22.04.2021',
      time: '14:12'
  },
  {
      id: 1,
      title: 'Адские псы',
      name: 'Сергей',
      date: '22.04.2021',
      time: '14:12'
  },
  {
      id: 2,
      title: 'Адские псы',
      name: 'Сергей',
      date: '22.04.2021',
      time: '14:12'
  },
  {
      id: 3,
      title: ' Название комнаты если оно очень длинное Название комнаты если оно очень длинное Название комнаты если оно очень длинное Название комнаты если оно очень длинное ',
      name: 'Сергей',
      date: '22.04.2021',
      time: '14:12'
  }
]

const MyRooms = () => {
  return (
    <div>
      <Row gutter={[10, 30]}>
        {InviteInfo.map(info => (
          <InviteCard key={info.id} title={info.title} date={info.date} time={info.time}/>
        ))}
      </Row>
    </div>
  );
};

export default MyRooms;
