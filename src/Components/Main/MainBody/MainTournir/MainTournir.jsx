import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import routes from "../../../../routing/routes";
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

const MainTournir = () => (  // TODO поправить верстку 
    <div className={s.cards}>
        {TournirCards.map((card) => (
            <Link to={routes[card.color]} gutter={[34, 56]} >
                <Card
					key={card.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt='' src={card.background} />}>
                    <Card.Meta
						title=''
                        description={
                            <>
                                <span>{card.name}</span>
                                <img src={card.icon} alt='' />
                            </>
                        }
                    />
                </Card>
            </Link>
        ))}
    </div>
);

export default MainTournir;
