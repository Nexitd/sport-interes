import React, { useEffect } from "react";
import { Row, Col } from "antd";
import ChampTournir from "../../../Components/ChampTournir/ChampTournir";
import Tours from "../../../Components/Tours/Tours";
import { ToursInfo } from "../Tours";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFootballGames } from "../../../store/slices/football";

const dataSource = [
  {
    key: "1",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "2",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "3",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "4",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "5",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
  {
    key: "6",
    title: "Фрайбург",
    firstCol: "23",
    secondCol: "53",
    thirdCol: "19",
    fourthCol: "72",
    fifthCol: "21",
    sixCol: "89",
    sevenCol: "-63",
    eightCol: "72",
  },
];

const columns = [
  {
    title: "",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Название команды",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "И",
    dataIndex: "firstCol",
    key: "firstCol",
  },
  {
    title: "В",
    dataIndex: "secondCol",
    key: "secondCol",
  },
  {
    title: "Н",
    dataIndex: "thirdCol",
    key: "thirdCol",
  },
  {
    title: "П",
    dataIndex: "fourthCol",
    key: "fourthCol",
  },
  {
    title: "З",
    dataIndex: "fifthCol",
    key: "fifthCol",
  },
  {
    title: "П",
    dataIndex: "sixCol",
    key: "sixCol",
  },
  {
    title: "+/-",
    dataIndex: "sevenCol",
    key: "sevenCol",
  },
  {
    title: "0",
    dataIndex: "eightCol",
    key: "eightCol",
  },
];

const Tournir = () => {
  const dispatch = useDispatch();
  const { footballGames } = useSelector((state) => state.football);

  useEffect(() => {
    dispatch(getFootballGames());
  }, [dispatch]);

  

  return (
    <div className='content'>
      <Row gutter={[10, 30]}>
        <Col span={24}>
          <ChampTournir dataSource={dataSource} columns={columns} />
        </Col>
          <Col span={24}>
            <Tours
              title='29-й тур'
              firstScore="2"
              secondScore="3"
              point='-'
              match='/matches'
              predictionScore1={ToursInfo[0].predictionScore1}
              predictionScore2={ToursInfo[0].predictionScore2}
              predict={ToursInfo[0].predictBtn}
            />
          </Col>
        
        <Col span={24}>
          <Tours
            title='29-й тур'
            firstScore='-'
            secondScore='-'
            point='-'
            predictionScore1={ToursInfo[0].predictionScore1}
            predictionScore2={ToursInfo[0].predictionScore2}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Tournir;
