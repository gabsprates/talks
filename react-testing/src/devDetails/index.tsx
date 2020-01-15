import React from "react";
import style from "./index.scss";
import { Repositories } from "../repos";

export const DevDetails = ({ user }: { user: UserType | null }) =>
  user ? (
    <section className={style.devDetails}>
      <h2>dev details</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Repositories username={user.github} />
    </section>
  ) : null;
