import React from "react";
import { authorizedOnlyHoc } from "@/utils/authorizedOnlyHOC";
import { EditorField } from '@/components/Conditions/components/EditorField'; 
import { RuleElement, RuleElementNames } from '@/types/conditions'
import { conditionAddElement, conditionClear, conditionRemovelement, conditionSave, conditionEdit, conditionCaretControl } from "@/rdx/actions";
import { AppState } from '@/rdx/reducer'; 
import { connect } from "react-redux"; 

// (window as any).__store = store;


function mapStateToProps(state: AppState) { 
  return {
    cursorPosition: state.conditionsControl.cursorPosition,
    elements: state.conditionsControl.elements,
  }
}

const mapDispatchToProps = { 
  conditionRemovelement, 
  conditionAddElement, 
  conditionSave, 
  conditionClear, 
  conditionEdit, 
  conditionCaretControl 
}; 

type RawConditionsScreenProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;


export class RawConditionsScreen extends React.Component<RawConditionsScreenProps, {}> {

  onRemoveElementClick = (index: number) => {
    this.props["conditionRemovelement"](index);
  }

  onAddElementClick = (element: RuleElement) => {
    this.props["conditionAddElement"](element);
  }
  

  render() {
    return (
      <div>
      <EditorField rule={this.props} onDelete={this.onRemoveElementClick} onCaretChange={this.props["conditionCaretControl"]}/>
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

        <button id="clear_btn" onClick={this.props["conditionClear"]}>очистить</button>
        <button id="save_btn" onClick={this.props["conditionEdit"]}>загрузить</button>
        <button id="save_btn" onClick={this.props["conditionSave"]}>сохранить</button>

        <pre>{JSON.stringify(this.props, null, 2)}</pre> 
      </div>

    );
  }
} 

export const ConditionsScreen = connect(mapStateToProps, mapDispatchToProps)(RawConditionsScreen);
