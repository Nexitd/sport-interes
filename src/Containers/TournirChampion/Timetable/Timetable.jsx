import React from "react";
import { Row, Col } from "antd";
import Tours from "../../../Components/Tours/Tours";
import { ToursInfo } from "../Tours";
import s from "./Timetable.module.css";

const Timetable = () => {
  return (
    <div className='content'>
      <Row gutter={[10, 30]}>
        <Col span={24}>
          <Tours
            title='28-й тур'
            firstScore='-'
            secondScore='-'
            predictionScore1={ToursInfo[0].predictionScore1}
            predictionScore2={ToursInfo[0].predictionScore2}
            predict={ToursInfo[0].predictBtn}
          />
        </Col>
        <Col span={24}>
        <Tours
            title='29-й тур'
            firstScore='-'
            secondScore='-'
            predictionScore1={ToursInfo[0].predictionScore1}
            predictionScore2={ToursInfo[0].predictionScore2}
            predict={ToursInfo[0].predictBtn}
          />
        </Col>
        <Col span={24}>
        <Tours
            title='30-й тур'
            firstScore='-'
            secondScore='-'
            predictionScore1={ToursInfo[0].predictionScore1}
            predictionScore2={ToursInfo[0].predictionScore2}
            predict={ToursInfo[0].predictBtn}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Timetable;
