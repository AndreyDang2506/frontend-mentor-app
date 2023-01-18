import React from "react";
import { useDispatch } from "react-redux";
import { upload } from "../../../../store/fylo/fyloSlice";

function FyloBtn(props) {
  const { icon } = props;
  const dispatch = useDispatch();

  return (
    <button aria-label="Info" onClick={() => dispatch(upload(20))}>
      <img src={icon} alt="" aria-hidden="true" />
    </button>
  );
}

export default FyloBtn;
