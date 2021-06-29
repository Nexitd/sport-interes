import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Card } from "antd";
import routes from "../../../routing/routes";
import s from "./MainTournir.module.css";

const TournirCards = [
  {
    id: 1,
    name: "Футбол",
    color: "football",
    icon: "/assets/images/TournirCards/Group 78.png",
    background: "/assets/images/TournirCards/image 30.jpg",
  },
  {
    id: 2,
    name: "Хоккей",
    color: "hockey",
    icon: "/assets/images/TournirCards/Group 330.png",
    background: "/assets/images/TournirCards/image 33.jpg",
  },
  {
    id: 3,
    name: "Баскетбол",
    color: "basketball",
    icon: "/assets/images/TournirCards/Group 329.png",
    background: "/assets/images/TournirCards/image 31.jpg",
  },
];

const MainTournir = () => (
  <div className={s.cards}>
    {TournirCards.map((card) => (
      <Link to={routes[card.color]} className={s.card} key={card.id}>
        <Card
          hoverable
          style={{ width: "100%", borderRadius: 5 }}
          cover={<img alt="" src={card.background} />}
        >
          <Card.Meta
            description={
              <div className={s.card__footer}>
                <span className={classNames([[card.color], s.text])}>
                  {card.name}
                </span>
                <img src={card.icon} alt="" />
              </div>
            }
          />
        </Card>
      </Link>
    ))}
  </div>
);

export default MainTournir;
