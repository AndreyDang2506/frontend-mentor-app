import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataBubble from "../../components/DataBubble";
import StorageDisplay from "../../components/StorageDisplay";

function Info(props) {
  const { usedData } = props;
  const currentPercent = useSelector((state) => state.fylo.currentPercent);

  useEffect(() => {
    console.log("currentPercent", currentPercent);
  }, [currentPercent]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1000);

  return (
    <div className="bottom">
      <p className="data-text">
        You’ve used{" "}
        <span className="data">{(currentPercent / 100) * to || 0} GB</span> of
        your storage
      </p>

      <StorageDisplay from={from} to={to} percent={currentPercent} />
      <DataBubble leftData={to - (to / 100) * currentPercent} />
    </div>
  );
}

export default Info;
