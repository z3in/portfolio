import React from "react";
import s from "./home.module.scss";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();

  return (
    <div className={s.Home}>
      <div className={s.HomeTextMain}>
        <div className={s.HomeFirst}> Versatile</div>
        <div className={s.HomeSecond}> Receptive</div>
        <div className={s.HomeThird}> Passionate</div>
      </div>
      <div className={s.RightFrameButtons}>
        <div>
          <button onClick={() => history.push("/contact")}>CONTACT</button>
        </div>
        <div>
          <button onClick={() => history.push("/projects")}>PROJECTS</button>
        </div>
      </div>
    </div>
  );
}
