import React from "react";
import style from "./index.scss";

export const User = (props: UserType) => (
  <div className={style.user}>
    <strong className={style.name}>{props.name}</strong>
    <div className={style.github}>{props.github}</div>
  </div>
);
