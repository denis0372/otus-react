import React, { useCallback, useState } from "react";
import { AppState } from "@/rdx/reducer";
import { actions } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "ramda";
import { Redirect } from "react-router-dom";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const username = useSelector(({ login }: AppState) => login.username);
  const [name, setName] = useState(username);

  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (!isEmpty(name)) {
        dispatch(actions.login(name));
      }
    },
    [name, dispatch]
  );

  return isEmpty(username) ? (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          placeholder="Введите ваше имя"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
        />
      </label>
      <button>Login</button>
    </form>
  ) : (
    <Redirect to="/conditions" />
  );
};
