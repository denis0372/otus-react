import React from "react";
import { EditorField } from "./components/EditorField";
import { RuleElement, RuleElementNames } from "./types";
import { actions } from "./slice";
import { AppState } from "@/rdx/reducer";
import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from 'redux-undo'


function mapStateToProps(state: AppState) {
  return {
    rule: state.conditions.present.rule,
    editorEntityEnv: state.conditions.present.editorEntityEnv,
    canUndo: state.conditions.past.length > 0,
    canRedo: state.conditions.future.length > 0
  };
}

const mapDispatchToProps =  {
  conditionRemoveElement: actions.conditionRemoveElement,
  conditionAddElement: actions.conditionAddElement,
  conditionChangeElement: actions.conditionChangeElement,
  conditionSave: actions.conditionSave,
  conditionClear: actions.conditionClear,
  conditionEdit: actions.conditionEdit,
  conditionCaretControl: actions.conditionCaretControl,
  conditionEditorInit: actions.conditionEditorInit,
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo,
};

type RawConditionsScreenProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class RawConditionsScreen extends React.Component<
  RawConditionsScreenProps
> {
  onRemoveElementClick = (index: number) => {
    this.props.conditionRemoveElement(index);
  };

  onAddElementClick = (element: RuleElement) => {
    this.props.conditionAddElement(element);
  };

  onElementChange = (index: number, value: string) => {
    this.props.conditionChangeElement({ index, value });
  };

  componentDidMount() {
    this.props.conditionEditorInit();
  }

  render() {
    return (
      <div className="site_main_panel">

        <h5>Conditions editor</h5>

        <EditorField
          rule={this.props.rule}
          editorEntityEnv={this.props.editorEntityEnv}
          onDelete={this.onRemoveElementClick}
          onCaretChange={this.props.conditionCaretControl}
          onElementChange={this.onElementChange}
        />
        <ul className="editor-add-buttons">
          <li style={{ paddingBlockEnd: 20 }}>Добавить: </li>
          <li>
            <div
              id="add_btn_and"
              onClick={() => this.onAddElementClick({ type: "and" })}
              className="editor-block-and"
            >
              {RuleElementNames.and}
            </div>
          </li>
          <li>
            <div
              id="add_btn_or"
              onClick={() => this.onAddElementClick({ type: "or" })}
              className="editor-block-or"
            >
              {RuleElementNames.or}
            </div>
          </li>
          <li>
            <div
              id="add_btn_ne"
              onClick={() => this.onAddElementClick({ type: "ne" })}
              className="editor-block-not"
            >
              {RuleElementNames.ne}
            </div>
          </li>
          <li>
            <div
              onClick={() => this.onAddElementClick({ type: "left_bracket" })}
              className="editor-left-bracket"
            >
              {RuleElementNames.left_bracket}
            </div>
          </li>
          <li>
            <div
              onClick={() => this.onAddElementClick({ type: "right_bracket" })}
              className="editor-right-bracket"
            >
              {RuleElementNames.right_bracket}
            </div>
          </li>
          <li style={{ paddingBlockEnd: 20 }}>
            <div
              onClick={() => this.onAddElementClick({ type: "location" })}
              className="editor-block-location"
            >
              {RuleElementNames.location}
            </div>
          </li>
          <li>
            <div onClick={() => this.onAddElementClick({ type: "rat" })}>
              {RuleElementNames.rat}
            </div>
          </li>
          <li>
            <div onClick={() => this.onAddElementClick({ type: "apn" })}>
              {RuleElementNames.apn}
            </div>
          </li>
          <li>
            <div
              onClick={() => this.onAddElementClick({ type: "device_type" })}
              className="editor-block-type"
            >
              {RuleElementNames.device_type}
            </div>
          </li>
          <li>
            <div
              onClick={() => this.onAddElementClick({ type: "device_brand" })}
              className="editor-block-brand"
            >
              {RuleElementNames.device_brand}
            </div>
          </li>
          <li>
            <div
              onClick={() => this.onAddElementClick({ type: "device_model" })}
              className="editor-block-model"
            >
              {RuleElementNames.device_model}
            </div>
          </li>
          <li>
            <div onClick={() => this.onAddElementClick({ type: "schedule" })}>
              {RuleElementNames.schedule}
            </div>
          </li>
        </ul>

        <p>
          <button className="web_btn" onClick={this.props.onUndo} disabled={!this.props.canUndo}>
            Undo
          </button>
          <button className="web_btn" onClick={this.props.onRedo} disabled={!this.props.canRedo}>
            Redo
          </button>
        </p>

        <button className="web_btn" id="clear_btn" onClick={this.props.conditionClear}>
          очистить
        </button>
        <button className="web_btn" id="edit_btn" onClick={this.props.conditionEdit}>
          загрузить
        </button>
        <button className="web_btn"
          id="save_btn"
          onClick={() =>
            this.props.conditionSave({
              cursorPosition: this.props.rule.cursorPosition,
              elements: this.props.rule.elements,
            })
          }
        >
          сохранить
        </button>
      </div>
    );
  }
}

export const Conditions = connect(
  mapStateToProps,
  mapDispatchToProps
)(RawConditionsScreen);
