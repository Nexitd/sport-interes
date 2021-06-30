import React from 'react'
import { Row, Col, Card } from 'antd'
import { getDate } from "../../Utils/Date"
import s from './Tours.module.css'

const TourInfo = [
    {
        id: 0,
        time: 25143252345435,
        firstComand: 'Челси',
        secondComand: 'Ман Сити',
        firstImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        secondImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        firstScore: 0,
        secondScore: 3,
        point: '+5'
    },
    {
        id: 1,
        time: 25143252345435,
        firstComand: 'Челси',
        secondComand: 'Ман Сити',
        firstImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        secondImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        firstScore: 0,
        secondScore: 3,
        point: '+5'
    },
    {
        id: 2,
        time: 25143252345435,
        firstComand: 'Челси',
        secondComand: 'Ман Сити',
        firstImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        secondImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        firstScore: 0,
        secondScore: 3,
        point: '+5'
    },
    {
        id: 3,
        time: 25143252345435,
        firstComand: 'Челси',
        secondComand: 'Ман Сити',
        firstImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        secondImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        firstScore: 0,
        secondScore: 3,
        point: '+5'
    },
    {
        id: 4,
        time: 25143252345435,
        firstComand: 'Челси',
        secondComand: 'Ман Сити',
        firstImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        secondImg: <img src='/assets/images/Tour/image 27.svg' alt='command'/>,
        firstScore: 0,
        secondScore: 3,
        point: '+5'
    }
];

const Tours = ({ title, timestamp = TourInfo.time }) => {
    return (
        <Col span={24}>
            <h3 className={s.title}>{title}</h3>
            <Row gutter={[0, 10]}>
                {TourInfo.map(info => (
                    <Col span={24}>
                        <Card key={info.id} className={s.tour}>
                            <div className={s.time}>
                                <span className={s.tour__time}>
                                    {getDate(timestamp, {
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: false,
                                    })}    
                                </span>
                            </div>
                            <div className={s.comands}>
                                <p className={s.command__name}>{info.firstComand}</p>
                                {info.firstImg}
                                {info.secondImg}
                                <p className={s.command__name}>{info.secondComand}</p>
                            </div>
                            <div className={s.score}>
                                <input type="text" value={info.firstScore} className={s.tour__score} disabled/>
                                <input type="text" value={info.secondScore} className={s.tour__score} disabled/>
                            </div>
                            <div className={s.points}>
                                <span className={s.tour__point}>{info.point}</span>
                            </div>
                        </Card>
                    </Col>
                ))} 
            </Row>
        </Col>
    )
}

export default Tours;
