import React from "react";
import RightFrameHome from "../Frames/rightFrame/RightFrameHome";
import LeftFrame from "../Frames/leftFrame/LeftFrame";
import s from "./body.module.scss";

export default function Body() {
  return (
    <main className={s.main}>
      <LeftFrame />
      <RightFrameHome />
    </main>
  );
}
