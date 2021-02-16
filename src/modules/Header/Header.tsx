import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "@/rdx/reducer";
import { isEmpty } from "ramda";
import { actions } from "@/modules/Login/slice";

const mapStateToProps = ({ login }: AppState) => ({
  ...login,
});

const mapDispatchToProps = {
  logout: actions.logout,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class HeaderComponent extends PureComponent<Props> {
  render() {
    const { username } = this.props;

    return (

      <div id="header">

        <div className="app">
          <h1 className="app_name">Проектная работа React</h1>
        </div>

        <div id="topmenu">
        <div className="prolog"></div>
          <nav>
          <ul className="smenu">
            <li>
              <Link className="tx_btn_cont" to="/conditions">Conditions Editor</Link>
            </li>

            <li className="last">
              <span className="tx_btn_cont">Пользователь: {username}</span>
              <span className="tx_btn_cont">&nbsp;|&nbsp;</span>
              <a className="tx_btn_cont" id="btn_logout" onClick={this.props.logout}>Logout</a>
            </li>
          </ul>
          </nav>
        </div>
      </div>
    );

  }
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
