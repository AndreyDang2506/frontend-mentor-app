import React, { useEffect, useState } from "react";
import DataBubble from "../../components/DataBubble";
import StorageDisplay from "../../components/StorageDisplay";
// import PropTypes from "prop-types";

// Info.propTypes = {};
function Info(props) {
  const { usedData } = props;
  const [percentValue, setPercentValue] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(100);
  useEffect(() => {
    setPercentValue(50);
    setFrom(0);
    setTo(1000);
  }, []);
  return (
    <div className="bottom">
      <p className="data-text">
        You’ve used <span className="data">{usedData} GB</span> of your storage
      </p>

      <StorageDisplay from={from} to={to} percent={percentValue} />
      <DataBubble leftData={185} />
    </div>
  );
}

export default Info;
