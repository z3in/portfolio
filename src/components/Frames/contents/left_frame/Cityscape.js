import React from "react";

export default function Cityscape(props) {
  const Scape = require("../../../../assets/img/bg.jpg");
  return (
    <div>
      <div className={props.styles}>
        <div className={props.s.iam}>I AM</div>
      </div>
      <div className={props.styles}>
        <span className={props.s.SE}>SE</span>
        <span className={props.s.B}>B</span>
      </div>
      <div className={props.s.LeftFrameMe}>
        <img src={Scape} alt="Person" width={props.width} />
      </div>
    </div>
  );
}
