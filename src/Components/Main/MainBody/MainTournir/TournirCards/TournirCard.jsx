import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../../../routing/routes";
import s from "./TournirCard.module.css";

const TournirCard = ({ background, color, name, icon, link }) => (
	<Link to={routes[color]}>
		<div className={s.card}>
			<div className={s.card__head}>
				<img src={background} alt='' />
			</div>
			<div className={s.card__body}>
				<p className={s[color]}>{name}</p>
				<img src={icon} alt='' />
			</div>
		</div>
	</Link>
);

export default TournirCard;
