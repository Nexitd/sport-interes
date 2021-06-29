import React from 'react'
import { Row, Col } from "antd";
import s from './Achivements.module.css'

const infoSlider = [
    {
      id: 0,
      img: <img src='/assets/images/slider/image 42.png' alt='achive'/>,
      text: 'Суперкубок УЕФА'
    },

    {
      id: 1,
      img: <img src='/assets/images/slider/image 43.png' alt='achive'/>,
      text: 'Лига Европы'
    },

    {
      id: 2,
      img: <img src='/assets/images/slider/image 45.png' alt='achive'/>,
      text: 'Чемпионат Европы'
    },

    {
      id: 3,
      img: <img src='/assets/images/slider/image 46.png' alt='achive'/>,
      text: 'Чемпионат мира'
    },

    {
      id: 4,
      img: <img src='/assets/images/slider/image 47.png' alt='achive'/>,
      text: 'Лучший игрок года'
    }
];

const Achivements = () => {
    return (
        <Col span={24}>
            <div className={s.slider}>
              <Row justify="space-between" align="middle" gutter={[12]} >
                <h2 className={s.title}>Достижения</h2>
                <div className={s.achive}>
                  <span className={s.text}>Победитель туров</span>
                  <button>{infoSlider.length}</button>
                </div>
              </Row>
              <div className={s.slider}>
				  <Row justify="center" align="middle" className={s.cont} >
						{infoSlider.map(info => 
							<Col span={4} align="middle">
								<div className={s.item}>
									{info.img}
									<p className={s.text}>{info.text}</p>
								</div>
							</Col>
						)}
				  </Row>
              </div>
            </div>
          </Col>
    )
}

export default Achivements;