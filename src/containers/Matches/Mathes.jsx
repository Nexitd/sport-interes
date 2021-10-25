import React from "react";
import { Row, Col, Typography, Button, Comment, Avatar, Card } from "antd";
import MatchHead from "../../components/Match/MatchHead/MatchHead";
import Advertising from "../../components/Advertising/Advertising";
import MatchProtocol from "../../components/Match/MatchProtocol/MatchProtocol";
import { useSelector } from "react-redux";
import TextArea from "antd/lib/input/TextArea";

const MatchHeadInfo = {
  firstComand: <img src="/assets/images/Tour/image 27.svg" alt="" />,
  secondComand: <img src="/assets/images/Tour/image 27.svg" alt="" />,
  time: "1-й тайм",
  timing: new Date().getHours() + " : " + new Date().getMinutes(),
  firstComandTitle: "Динамо",
  firstComandCity: "Минск",
  score: "1 : 1",
  tour: "10-й тур",
  timetable: "20:30 МСК / 23 мая 2020 суббота",
};

const CommentsInfo = [
  {
    id: 0,
    nickname: "Vladimir",
    date: `${new Date().getDay()}.${
      new Date().getDate() + 1
    }.${new Date().getFullYear()} в ${new Date().getHours()}:${new Date().getMinutes()}`,
    message:
      "Ставлю всё на Динамо, думаю в этот раз они точно выиграют поскольку у них новый тренер и после последнего их выхода они добились больших результатов на тренировках",
    like: <img src="/assets/images/Match/like.svg" alt="" />,
    avatar: "/assets/images/Match/pers.png",
  },
  {
    id: 1,
    nickname: "Vladimir",
    date: `${new Date().getDay()}.${
      new Date().getDate() + 1
    }.${new Date().getFullYear()} в ${new Date().getHours()}:${new Date().getMinutes()}`,
    message:
      "Ставлю всё на Динамо, думаю в этот раз они точно выиграют поскольку у них новый тренер и после последнего их выхода они добились больших результатов на тренировках",
    like: <img src="/assets/images/Match/like.svg" alt="" />,
    avatar: "/assets/images/Match/pers.png",
  },
  {
    id: 2,
    nickname: "Vladimir",
    date: `${new Date().getDay()}.${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()} в ${new Date().getHours()}:${new Date().getMinutes()}`,
    message:
      "Ставлю всё на Динамо, думаю в этот раз они точно выиграют поскольку у них новый тренер и после последнего их выхода они добились больших результатов на тренировках",
    like: <img src="/assets/images/Match/like.svg" alt="" />,
    avatar: "/assets/images/Match/pers.png",
  },
];

const Matches = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className="content">
      <Row gutter={[10, 10]}>
        <Col span={18}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <MatchHead
                title="Англия - Кубок Лиги"
                firstComand={MatchHeadInfo.firstComand}
                secondComand={MatchHeadInfo.secondComand}
                timing={MatchHeadInfo.timing}
                firstComandCity={MatchHeadInfo.firstComandCity}
                secondComandCity={MatchHeadInfo.firstComandCity}
                firstComandTitle={MatchHeadInfo.firstComandTitle}
                secondComandTitle={MatchHeadInfo.firstComandTitle}
                score={MatchHeadInfo.score}
                tour={MatchHeadInfo.tour}
                timetable={MatchHeadInfo.timetable}
                time={MatchHeadInfo.time}
              />
            </Col>
            <Col span={24}>
              <MatchProtocol title="Протокол" />
            </Col>
            <Col span={24}>
              <Typography.Title level={2}>Чат</Typography.Title>
              {isAuth && (
                <>
                  <TextArea rows={4} />
                  <Button shape="round" type="primary">
                    Отправить
                  </Button>
                </>
              )}
              {CommentsInfo.map((comment) => (
                <Card key={comment.id} size="small">
                  <Comment
                    author={comment.nickname}
                    avatar={
                      <Avatar src={comment.avatar} alt={comment.nickname} />
                    }
                    content={<p>{comment.message}</p>}
                  />
                </Card>
              ))}
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Advertising />
          <Advertising />
          <Advertising />
        </Col>
      </Row>
    </div>
  );
};

export default Matches;
