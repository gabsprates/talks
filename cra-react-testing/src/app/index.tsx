import React, { useState } from "react";
import style from "./index.module.scss";
import { List } from "../list";
import { users } from "../data/users";
import { DevDetails } from "../devDetails";

export const App = () => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <section className={style.app}>
      <h1>"Zone Of Front-Enders"</h1>

      <div className={style.columns}>
        <div className={style.sidebar}>
          <List users={users} onClick={(user) => setUser(user)} />

          {user && (
            <>
              <hr />
              <button onClick={() => setUser(null)}>clear user</button>
            </>
          )}
        </div>

        <div>
          <DevDetails user={user} />
        </div>
      </div>
    </section>
  );
};
