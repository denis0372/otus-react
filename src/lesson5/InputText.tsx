import React, { Component } from "react";

interface Prop {
    onChangeAction: (event: any) => void;
    value?: string;
    placeHolder?: string;
  }

interface State {
  value?: string;
}

export class InputText extends Component<Prop, State> {
    constructor(props: Prop) {
      super(props);

      this.state = {
        value : this.props.value
      }
    }
 
    componentDidUpdate(prevProps: Prop) {

      // console.log("componentDidUpdate: " + prevProps.value + " -> " + this.props.value);

      if (prevProps.value !== this.props.value) {
        this.setState({value: this.props.value});
      }
    }

    render() {
      return (
          <input
            type="text"
            value={this.state.value}
            placeholder={this.props.placeHolder}
            onChange={this.props.onChangeAction}
          />
      );
    }
  }