import React from "react";
import { Row, Col } from "antd";
import MatchHead from "../../Components/Match/MatchHead/MatchHead";
import Add from "../../Components/Add/Add";
import MatchProtocol from "../../Components/Match/MatchProtocol/MatchProtocol";
import MatchComments from "../../Components/Match/MatchComments/MatchComments";

const MatchHeadInfo = {
  firstComand: <img src='/assets/images/Tour/image 27.svg' alt='' />,
  secondComand: <img src='/assets/images/Tour/image 27.svg' alt='' />,
  time: '1-й тайм',
  timing: new Date().getHours() + ' : ' + new Date().getMinutes(),
  firstComandTitle: 'Динамо',
  firstComandCity: 'Минск',
  score: '1 : 1',
  tour: '10-й тур',
  timetable: '20:30 МСК / 23 мая 2020 суббота'
};

const Matches = () => {
  return (
    <div className='content'>
      <Row gutter={[10, 10]}>
        <Col span={18}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <MatchHead
                title='Англия - Кубок Лиги'
                firstComand={MatchHeadInfo.firstComand}
                secondComand={MatchHeadInfo.secondComand}
                timing={MatchHeadInfo.timing}
                firstComandCity={MatchHeadInfo.firstComandCity}
                secondComandCity={MatchHeadInfo.firstComandCity}
                firstComandTitle={MatchHeadInfo.firstComandTitle}
                secondComandTitle={MatchHeadInfo.firstComandTitle}
                score={MatchHeadInfo.score}
                tour={MatchHeadInfo.tour}
                timetable={MatchHeadInfo.timetable}
                time={MatchHeadInfo.time}
              />
            </Col>
            <Col span={24}>
                <MatchProtocol title='Протокол'/>
            </Col>
            <Col span={24}>
              <MatchComments title='Чат'/>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Add />
          <Add />
          <Add />
        </Col>
      </Row>
    </div>
  );
};

export default Matches;
