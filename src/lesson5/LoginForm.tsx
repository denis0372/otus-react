import React, { Component } from "react";
import { InputText } from "./InputText";

interface Props {

}

interface State {
    login: string;
    passw: string;
}

export class LoginForm extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswChange = this.handlePasswChange.bind(this);
        this.loginAction = this.loginAction.bind(this);
    }

    render() {
        return(
            <div>
                <InputText placeHolder="Login" onChangeAction={this.handleLoginChange}/>
                <InputText placeHolder="Password" onChangeAction={this.handlePasswChange}/>
                <button onClick={this.loginAction}>Login</button>
            </div>
        );
    }

    handleLoginChange (event: any) {
        this.setState({ login: event.target.value });
    };

    handlePasswChange (event: any) {
        this.setState({ passw: event.target.value });
    };

    loginAction() {
        alert(`Login: ${this.state.login}, passsw: ${this.state.passw}`);
    };
}