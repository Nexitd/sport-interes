import React from "react";
import { useSelector } from "react-redux";
import Tours from "../../../components/Tours/Tours";

const Results = () => {
  const { pastEvents } = useSelector((state) => state.football);

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
