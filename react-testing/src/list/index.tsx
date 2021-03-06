import React from "react";
import { User } from "../user";

export const List = (props: {
  users: UserType[];
  onClick: (user: UserType) => void;
}) =>
  props.users.length ? (
    <aside>
      <ul>
        {props.users.map(user => (
          <li
            key={user.name}
            role="item-user"
            onClick={() => props.onClick(user)}
          >
            <User {...user} />
          </li>
        ))}
      </ul>
    </aside>
  ) : (
    <div>nenhum dev encontrado 😰</div>
  );
