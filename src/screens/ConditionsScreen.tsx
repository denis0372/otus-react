import React from "react";
import { authorizedOnlyHoc } from "@/utils/authorizedOnlyHOC";
import { RouteComponentProps } from "react-router-dom";
import { store } from '@/rdx/store';
import * as actionTypes from '@/rdx/types'; 
import { EditorField } from '@/components/Conditions/components/EditorField'; 
import { RuleElement, RuleElementNames } from '@/types/conditions'

(window as any).__store = store;

store.subscribe(() => {
  console.log('State', store.getState());
});

interface RouteParams {
  id: string;
}

function getReduxScreenState() { 
  return {
    cursorPosition: store.getState().elementsControl.cursorPosition,
    rules: store.getState().elementsControl.rules,
  }
}

export class RawConditionsScreen extends React.PureComponent<RouteComponentProps<RouteParams>, {}> {

  storeSubscription?: Function;
  state = getReduxScreenState();

  componentDidMount() {
    this.storeSubscription = store.subscribe(() => this.setState(getReduxScreenState())); 
  }

  componentWillUnmount() {
    this.storeSubscription && this.storeSubscription();
  }

  onRemoveElementClick = (element: RuleElement, index: number) => {
    store.dispatch({
      type: actionTypes.REMOVE_ELEMENT,
      payload: {element, index}
    });
  }

  onAddElementClick = (element: RuleElement) => {
    store.dispatch({
      type: actionTypes.ADD_ELEMENT,
      payload: element
    });
  }

  render() {
    return (
      <div>
      <EditorField rule={this.state} onDelete={this.onRemoveElementClick} />
      <ul className="editor-add-buttons">
					<li style={{paddingBlockEnd: 20}}>Добавить: </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'and'})} className="editor-block-and">{RuleElementNames.and}</div>
          </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'or'})} className="editor-block-or">{RuleElementNames.or}</div>
          </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'ne'})} className="editor-block-not">{RuleElementNames.ne}</div>
          </li>
					<li>
            <div onClick={() => this.onAddElementClick({type: 'left_bracket'})} className="editor-left-bracket">{RuleElementNames.left_bracket}</div>
          </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'right_bracket'})} className="editor-right-bracket">{RuleElementNames.right_bracket}</div>
          </li>
					<li style={{paddingBlockEnd: 20}}>
						<div onClick={() => this.onAddElementClick({type: 'location'})} className="editor-block-location">{RuleElementNames.location}</div>
          </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'rat'})}>{RuleElementNames.rat}</div>
          </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'apn'})}>{RuleElementNames.apn}</div>
          </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'device_type'})} className="editor-block-type">{RuleElementNames.device_type}</div>
          </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'device_brand'})} className="editor-block-brand">{RuleElementNames.device_brand}</div>
          </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'device_model'})} className="editor-block-model">{RuleElementNames.device_model}</div>
          </li>
					<li>
						<div onClick={() => this.onAddElementClick({type: 'schedule'})}>{RuleElementNames.schedule}</div>
          </li>
				</ul>

        <pre>{JSON.stringify(store.getState(), null, 2)}</pre> 
      </div>

    );
  }
} 


export const ConditionsScreen = authorizedOnlyHoc(RawConditionsScreen, "/login");
