import React from "react";
import { Row, Col } from "antd";
import Tours from "../../../components/Tours/Tours";
import { ToursInfo } from "../Tours";
import { useSelector } from "react-redux";

const Results = () => {

  const { pastEvents } = useSelector(state => state.football);

  return (
    <div className="content">
      {Object.keys(pastEvents).map(
        (event) =>
          typeof event !== "number" && (
            <Tours key={event.id} title={event} game={pastEvents[event]} />
          )
      )}
    </div>
  );
};

export default Results;
