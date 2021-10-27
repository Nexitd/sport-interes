import React, { useEffect } from "react";
import { Row, Col, Tabs } from "antd";
import { Advertising } from "../../components";
import Tournir from "./Tournir/Tournir";
import Timetable from "./Timetable/Timetable";
import s from "./Tournir.module.css";
import Results from "./Results/Results";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
  getCurrentToursById,
  getPastToursById,
} from "../../store/slices/football";

const TournirChampionship = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrentToursById(id));
    dispatch(getPastToursById(id));
  }, [dispatch, id]);

  return (
    <div className="content">
      <Row>
        <Col span={18}>
          <h2 className="title">Англия - Чемпионатsss</h2>
          <Tabs
            tabBarGutter={0}
            className={s.tabs}
            type="card"
            size="large"
            defaultActiveKey="1"
            centered
          >
            <Tabs.TabPane tab="Турниры" key="1">
              <Tournir />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Расписание" key="3">
              <Timetable />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Результаты" key="4">
              <Results />
            </Tabs.TabPane>
          </Tabs>
        </Col>
        <Col span={6}>
          <Advertising />
          <Advertising />
        </Col>
      </Row>
    </div>
  );
};

export default TournirChampionship;
