import React from "react";
import Field from "./Field";

/**
 * Given a 'structure' props in the expected format, this component renders a number of Field components.
 */
export default class FieldSet extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.structure = props.structure || {};    
  }

  renderFields()
  {
    let fields = [];
    for (const fieldName in this.structure) {
      let fieldStructure = {};
      fieldStructure[fieldName] = this.structure[fieldName];
      let field = <Field structure={fieldStructure} onChange={this.props.onChange}/>
      fields.push(field);
    }    
    return fields;
  }

  render()
  {
    return (
      <div className="field-set">{this.renderFields()}</div>
    );
  }
}