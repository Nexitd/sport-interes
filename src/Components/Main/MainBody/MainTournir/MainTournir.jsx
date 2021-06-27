import React from "react";
import TournirCard from "./TournirCards/TournirCard";
import s from "./MainTournir.module.css";

const TournirCards = [{
	id: 1,
	name: 'Футбол',
	color: 'football',
	icon: '/assets/images/TournirCards/Group 78.png',
	background: '/assets/images/TournirCards/image 30.jpg'
},
{
	id: 2,
	name: 'Хоккей',
	color: 'hockey',
	icon: '/assets/images/TournirCards/Group 330.png',
	background: '/assets/images/TournirCards/image 33.jpg'
},
{
	id: 3,
	name: 'Баскетбол',
	color: 'basketball',
	icon: '/assets/images/TournirCards/Group 329.png',
	background: '/assets/images/TournirCards/image 31.jpg'
}
];

const MainTournir = () => (
	<div className={s.cards}>
		{TournirCards.map((card) => (
			<TournirCard
				key={card.id}
				name={card.name}
				icon={card.icon}
				background={card.background}
				color={card.color}
			/>
		))}
	</div>
);

export default MainTournir;
