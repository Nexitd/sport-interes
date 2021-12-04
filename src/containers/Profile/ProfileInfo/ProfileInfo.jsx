import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row, Statistic, Typography } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProfileAvatar from "./ProfileAvatar";
import StatisticDemo from "../../../components/Statistic/Statistic";
import Forecast from "../../../components/Forecasts/Forecast";
import Tours from "../../../components/Tours/Tours";
import styles from "./ProfileInfo.module.css";

const infoSlider = [
  {
    id: 0,
    img: "/assets/images/slider/image 42.png",
    text: "Суперкубок УЕФА",
  },

  {
    id: 1,
    img: "/assets/images/slider/image 43.png",
    text: "Лига Европы",
  },

  {
    id: 2,
    img: "/assets/images/slider/image 45.png",
    text: "Чемпионат Европы",
  },

  {
    id: 3,
    img: "/assets/images/slider/image 46.png",
    text: "Чемпионат мира",
  },

  {
    id: 4,
    img: "/assets/images/slider/image 47.png",
    text: "Лучший игрок года",
  },
];

const ProfileInfo = () => {
  const { profile } = useSelector((state) => state.auth);
  return (
    <Row gutter={[10, 30]}>
      <Col span={24}>
        <Card>
          <Row>
            <Col span={5}>
              <ProfileAvatar />
            </Col>
            <Col span={12}>
              <div className={styles.profile__info}>
                <h2 className={styles.name}>
                  {profile.name} {profile.surname}
                </h2>
                <p className={styles.reg}>
                  <span>Дата регистрации</span> 12 мая 2020 в 13:31
                </p>
              </div>
            </Col>
            <Col span={7}>
              <Statistic
                title="Текущий баланс"
                value={1000}
                valueStyle={{ color: "#ff5f23" }}
                suffix="₽"
              />
              <Statistic
                title="Сделано прогнозов"
                value={345}
                valueStyle={{ color: "#ff5f23" }}
              />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Row justify="space-between" align="middle">
          <Typography.Title level={2}>Достижения</Typography.Title>
          <div>
            <span>Победитель туров</span>
            <button>{infoSlider.length}</button>
          </div>
        </Row>
        <Card>
          <Carousel
            infiniteLoop
            showArrows
            showStatus={false}
            showThumbs={false}
          >
            {infoSlider.map((info) => (
              <div key={info.id}>
                <img src={info.img} alt="test" />
                <p>{info.text}</p>
              </div>
            ))}
          </Carousel>
        </Card>
      </Col>
      <StatisticDemo />
      <Forecast />
      {/* <Tours title="29-й тур" />
      <Tours title="30-й тур" /> */}
    </Row>
  );
};

export default ProfileInfo;
