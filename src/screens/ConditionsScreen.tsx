import React from "react";
import { authorizedOnlyHoc } from "@/utils/authorizedOnlyHOC";
import { RouteComponentProps } from "react-router-dom";
import { store } from '@/rdx/store';

(window as any).__store = store;

store.subscribe(() => {
  console.log('State', store.getState());
});

interface RouteParams {
  name: string;
}

store.dispatch({
  type: 'SOME_ACTION'
});

export class RawConditionsScreen extends React.PureComponent<RouteComponentProps<RouteParams>, {}> {

  render() {
    return (
      <div>in the future there will be a conditions editor here :)</div>
    );
  }
} 


export const ConditionsScreen = authorizedOnlyHoc(RawConditionsScreen, "/login");
