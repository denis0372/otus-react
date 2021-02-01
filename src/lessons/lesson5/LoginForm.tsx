import React, { Component } from "react";
import { InputText } from "./InputText";

interface Props {

}

interface State {
    login: string;
    passw: string;
}

export class LoginForm extends Component<Props, State> {

    successLogin: string;
    successPassw: string;


    constructor(props: Props) {
        super(props);

        this.state = {
          login : "",
          passw : ""
        }

        this.successLogin = "";
        this.successPassw = "";

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswChange = this.handlePasswChange.bind(this);
        this.loginAction = this.loginAction.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        /* Вместо получения с сервера*/
        this.successLogin = "admin";
        this.successPassw = "qwerty";

        /*подписка на события*/
        window.addEventListener('resize', this.handleResize);

        this.setState({});
    }

    componentWillUnmount() {
      /*отписка от события*/
      window.removeEventListener('resize', this.handleResize);
    }

    shouldComponentUpdate(nextState: State) {
      return nextState.login !== this.state.login || nextState.passw !== this.state.passw;
    }

    render() {

        return(
            <div>
                <InputText placeHolder="Login" value={this.state.login} onChangeAction={this.handleLoginChange}/>
                <InputText placeHolder="Password" value={this.state.passw} onChangeAction={this.handlePasswChange}/>
                <button onClick={this.loginAction}>Login</button>
                <div>Check: {this.state.login === this.successLogin && this.state.passw === this.successPassw ? "ok" : "wrong"}</div>
            </div>
        );
    }


    handleResize() {
      console.log("Resize event");
    }

    handleLoginChange (event: any) {
        this.setState({ login: event.target.value });
    };

    handlePasswChange (event: any) {
        this.setState({ passw: event.target.value });
    };

    loginAction() {
        alert(`Login: ${this.state.login}, passsw: ${this.state.passw}, result: ${this.state.passw === this.successPassw && this.state.login === this.successLogin}`);
    };
}