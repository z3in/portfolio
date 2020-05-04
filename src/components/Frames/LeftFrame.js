import React from "react";
import Me from "../../resources/img/test3.jpg";

export default function LeftFrame() {
  return (
    <div className="Left-Frame">
      <div className="Left-Frame-text">
        <h5>I AM</h5>
      </div>
      <div className="Left-Frame-text">
        <h1>
          <span>SE</span>B
        </h1>
      </div>
      <div className="Left-Frame-Me">
        <img
          src={Me}
          width="300"
          alt="Person"
          style={{ marginLeft: "-1.5em" }}
        />
      </div>
    </div>
  );
}
