import React from 'react'
import { Row, Col } from "antd";
import Tours from "../../../Components/Tours/Tours";
import { ToursInfo } from "../Tours";

const Results = () => {
    return (
        <div className='content'>
        <Row gutter={[10, 30]}>
            <Col span={24}>
            <Tours
                title='28-й тур'
                firstScore='0'
                secondScore='3'
                predictionScore1={ToursInfo[0].predictionScore1}
                predictionScore2={ToursInfo[0].predictionScore2}
                point='+5'
            />
            </Col>
            <Col span={24}>
            <Tours
                title='29-й тур'
                firstScore='0'
                secondScore='3'
                predictionScore1={ToursInfo[0].predictionScore1}
                predictionScore2={ToursInfo[0].predictionScore2}
                point='+1'
            />
            </Col>
            <Col span={24}>
            <Tours
                title='30-й тур'
                firstScore='0'
                secondScore='3'
                predictionScore1={ToursInfo[0].predictionScore1}
                predictionScore2={ToursInfo[0].predictionScore2}
                point='+3'
            />
            </Col>
      </Row>
    </div>
    )
}

export default Results;