import React from "react";

export default function Me(props) {
  const Me = require("../../../../assets/img/test3.jpg");
  return (
    <div>
      <div className="Left-Frame-Me">
        <img
          src={Me}
          alt="Person"
          style={{ marginLeft: "-1.5em", marginTop: "6.5em" }}
          width={props.width}
        />
      </div>
    </div>
  );
}
