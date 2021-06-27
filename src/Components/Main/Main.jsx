import React from "react";
import MainHeader from "./MainHeader/MainHeader";
import Prises from "./MainBody/Prises/Prises";
import MainTournir from "./MainBody/MainTournir/MainTournir";
import Points from "./MainBody/Points/Point";
import Rules from "./MainBody/Rules/Rules";
import TableScore from "./MainBody/TableScore/TableScore";
import s from "./Main.Module.css";

const Main = () => (
	<div className={s.main}>
		<MainHeader />
		<div className={s.main__body}>
			<Prises />
			<div className={s.main__container}>
				<div className={s.content}>
					 <MainTournir />
					<Points />
					{/* <Rules /> */}
				</div>
				<div className={s.table}>
					<TableScore />
				</div>
			</div>
		</div>
	</div>
);

export default Main;
