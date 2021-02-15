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
  const [passwd, setPasswd] = useState("");

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
    <div id="authpage">
      <form onSubmit={onSubmit}>
        <div className="spanel">
          <h3>Авторизация</h3>
          <div className="spanel_content">
            <table className="auth_form" width="100%">
              <tr>
                <td className="label">Логин</td>
                <td className="value">
                  <input className="input_field"
                    placeholder="Имя пользователя"
                    value={name}
                    onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
                  />
                </td>
              </tr>
              <tr>
                <td className="label">Пароль</td>
                <td className="value">
                  <input className="input_field"
                    placeholder="Пароль"
                    value={passwd}
                    onChange={(ev) => setPasswd((ev.target as HTMLInputElement).value)}
                  />
                </td>
              </tr>

              <tr>
              <td className="label"></td>
              <td><button>Login</button></td>
              </tr>
            </table>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <Redirect to="/conditions" />
  );
};
