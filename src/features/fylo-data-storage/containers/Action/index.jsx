import React from "react";
import logo from "../../../../assets/images/logo.svg";
import iconDocument from "../../../../assets/images/icon-document.svg";
import iconFolder from "../../../../assets/images/icon-folder.svg";
import iconUpload from "../../../../assets/images/icon-upload.svg";
import FyloBtn from "../../components/Button";

function Action(props) {
  return (
    <div className="top">
      <img className="logo" src={logo} alt="Fylo."></img>
      <ul className="functions">
        <li>
          <FyloBtn icon={iconDocument} />
        </li>
        <li>
          <FyloBtn icon={iconFolder} />
        </li>
        <li>
          <FyloBtn icon={iconUpload} />
        </li>
      </ul>
    </div>
  );
}

export default Action;
