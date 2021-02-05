import React, { useCallback, useState } from "react";
import { AppState } from '@/rdx/reducer'; 
import { actions } from "@/rdx/login";
import { connect } from "react-redux";
import { isEmpty } from "ramda"; 
import { Redirect } from "react-router-dom";


const mapStateToProps = ({ login }: AppState) => ({
  ...login,
});

const mapDispatchToProps = {
  login: actions.login,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;


export const LoginComponent: React.FC<Props> = ({ username, login }) => { 

  const [name, setName] = useState(username);

  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      login(name); 
    },
    [name, login]
  );

  return isEmpty(username) ? ( 
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
        />
      </label>
      <button>Login</button>
    </form>
  ) :
  <Redirect to="/conditions" /> 
  ;
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);