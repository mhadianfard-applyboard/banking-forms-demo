import React from "react";
import FieldSet from './FieldSet';
import Field from './Field';
import "./../style.css";

export default class BankingForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      values: {}
    };
  }

  /**
   * Handles default behaviour for input change events.
   */
  handleClick = (e) => {
    let newState = {...this.state}
    newState.values[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() 
  {
    return (
        <div>
          <h2>Beneficiary Details</h2>  
          <Field  structure={this.props.payee_type_field} 
                  onChange={this.handleClick}
          />

          {(this.state.values["payee.type"] == "COMPANY") && 
          (
            <div>
              <h3>Company Information</h3>
              <FieldSet structure={this.props.payee_company_fields}  
                        onChange={this.handleClick}
              />
            </div>            
          )}

          <h3>{this.headingPrefix()} Contact Information</h3>
          <FieldSet structure={this.props.payee_contact_fields}  
                    onChange={this.handleClick}
          />

          <h3>{this.headingPrefix()} Address Information</h3>
          <FieldSet structure={this.props.payee_address_fields}
                    onChange={this.handleClick}
          />

          <h2>{this.headingPrefix()} Banking Details</h2>
          <FieldSet structure={this.props.banking_fields}  
                    onChange={this.handleClick}
          />
        </div>
      );
  }

  /**
   * Prefix for the different headings
   */
  headingPrefix()
  {
    if (this.state.values["payee.type"] == "COMPANY") {
      return "Company";
    }

    return "";
  }
}