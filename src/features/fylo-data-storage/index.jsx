import React from "react";
// import PropTypes from "prop-types";
import Action from "./containers/Action";
import Info from "./containers/Info";

const Fylo = (props) => {
  return (
    <div className="main">
      <Action />
      <Info usedData={1815} />
    </div>
  );
};

// Fylo.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Fylo;
