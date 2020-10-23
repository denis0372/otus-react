import React, { Component } from "react";

interface Prop {
    onChangeAction: (event: any) => void;
    value?: string;
    placeHolder?: string;
  }


export class InputText extends Component<Prop> {
    constructor(props: Prop) {
      super(props);
    }
 
    render() {
      return (
          <input
            type="text"
            defaultValue={this.props.value}
            placeholder={this.props.placeHolder}
            onChange={this.props.onChangeAction}
          />
      );
    }
  }