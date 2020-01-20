import React, { useState } from "react";
import style from "./index.scss";
import { List } from "../list";
import { users } from "../data/users";
import { DevDetails } from "../devDetails";

export const App = () => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <section className={style.app}>
      <h1>Zone Of Front-Enders</h1>

      <div className={style.columns}>
        <List users={users} onClick={user => setUser(user)} />
        <DevDetails user={user} />
      </div>

      {user ? (
        <button role="clear user" onClick={() => setUser(null)}>
          clear user
        </button>
      ) : null}
    </section>
  );
};
