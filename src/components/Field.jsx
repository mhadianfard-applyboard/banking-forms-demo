import React from "react";

/**
 * A Field component wraps a text or dropdown user input as per our standard JSON strucutre 
 */
export default class Field extends React.Component 
{
  static fieldNumber = 1;

  constructor(props) {
    super(props);
    this.id = 'field_' + Field.fieldNumber;    
    this.name = Object.keys(props.structure).shift();
    this.structure = props.structure[this.name] || {};
    this.value = props.value || this.structure.default;
    this.isRequired = this.structure.required || false;

    if (this.name == undefined || this.name == "") {
      throw Error ("Field 'name' is required.");  
    } 

    Field.fieldNumber++;
  }

  /**
   * Renders the label part of this field.
   * @todo move to own component?
   */
  renderLabel() {
    return (
      <label for={this.id}>
        {this.structure.label}
        &nbsp;
        {this.isRequired && <span className="required">*</span>}
      </label>
    );
  }

  /**
   * Renders the input part of this field.
   * @todo move to own component?
   */
  renderInput() {
    if (this.structure.list) {
      return this.renderDropdownInput();
    }
    return this.renderTextInput();
  }

  /**
   * Renders input if it's a dropdown input field.
   * @todo move to own component?
   */
  renderDropdownInput()
  {
      return (
        <select
          id={this.id} 
          name={this.name} 
          value={this.value}
          onChange={this.props.onChange}
          required 
        >
          <option value="" disabled selected hidden>{this.structure.watermark}</option>
          {this.structure.list.list_items.map(
            item => (
              <option value={item.value}>
                {item.description}
              </option>)
          )}
        </select>
      );
  }

  /**
   * Renders input if it's a simple text input field.
   * @todo move to own component?
   */
  renderTextInput()
  {
    return (
      <input 
        id={this.id} 
        name={this.name} 
        value={this.value} 
        type="text" 
        placeholder={this.structure.watermark}
        onChange={this.props.onChange}
      />
    );
  }

  /**
   * Renders this entire component.
   */
  render() {
    return (
      <div className="field">
        <div className="label">
          {this.renderLabel()}
        </div>
        <div className="input">
          {this.renderInput()}
          {this.structure.description &&
            <div className="description" 
                /* @todo: Vulnerable to XXS attacks? */
                dangerouslySetInnerHTML={{__html: this.htmlDecode(this.structure.description)}}>            
            </div>
          }
        </div>
      </div>
      );
  }

  /**
   * Workaround to deprecated unescape() function
   * @param {string} input - an escaped html string.
   * @return {string} the unescaped version of the same string.
   */
  htmlDecode(input)
  {
    let e = document.createElement('div');
    e.innerHTML = input;
    let unescaped = e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    unescaped = unescaped.replace(/&lt;a/g, '<a').replace(/&lt;\/a/g, '</a').replace(/&gt;/g, '>');
    return unescaped;
  }
}