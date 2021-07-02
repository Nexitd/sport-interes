import React from "react";
import { Row } from "antd";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Achivements from "../Achivements/Achivements";
import Statistic from "../Statistic/Statistic";
import Forecast from "../Forecasts/Forecast";
import Tours from "../Tours/Tours";

const Profile = () => {
  return (
    <div>
      <Row gutter={[10, 30]}>
        <ProfileInfo />
        <Achivements />
        <Statistic />
        <Forecast />
        <Tours title="29-й тур" />
        <Tours title="30-й тур" />
      </Row>
    </div>
  );
};

export default Profile;
