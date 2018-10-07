import React from 'react';
import './App.css';
import { FormGroup, ControlLabel, FormControl, Checkbox, Radio } from 'react-bootstrap';

const createForm = (props) => {
    let form = []
    for (let i = 0; i < props.fields.length; i++) {
      let field = props.fields[i],
        returnField = [];
      if (field.element === 'input' || field.element === 'date' || field.element === 'number') {
        field.top = i * 20;
        field.left = 20 + 10*i;
        field.width = 200
        returnField.push(<FormGroup>
          {/* <div style={{ top: field.top + 'px', left: field.left + 'px', height: 20 + 'px', width: field.width + 'px', position:'absolute' }}> */}
            <div className="col-xs-3">
              <ControlLabel>{field.label}</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl id={field.field}
                type={field.element}
                label={field.label}
                placeholder={field.label} />
            </div>
          {/* </div> */}
        </FormGroup>);
      }
      else if (field.element === 'dropdown') {
        let values = [];
        values.push(<option value="Select">Select</option>);
        for (var x = 0; x < field.values.length; x++) {
          let value = field.values[x];
          values.push(<option value={value.name || value.id}>{value.name || value.id}</option>)
        };
        if (field.multiple) {
          returnField.push(<FormGroup controlId="formControlsSelectMultiple">
            <div className="col-xs-3">
              <ControlLabel>{field.label}</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl componentClass="select" multiple>
                {values}
              </FormControl>
            </div>
          </FormGroup>)
        }
        else {
          returnField.push(<FormGroup controlId="formControlsSelect">
            <div className="col-xs-3">
              <ControlLabel>{field.label}</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl componentClass="select" placeholder={field.label}>
                {values}
              </FormControl>
            </div>
          </FormGroup>)
        }
      }
      else if (field.element === 'textArea') {
        returnField.push(<FormGroup controlId={field.field}>
          <div className="col-xs-3">
            <ControlLabel>{field.label}</ControlLabel>
          </div>
          <div className="col-xs-3">
            <FormControl componentClass="textarea" placeholder={field.label} />
          </div>
        </FormGroup>);
      }
      else if (field.element === 'checkbox') {
        returnField.push(
          <FormGroup>
            <ControlLabel>{field.label}</ControlLabel>
            <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
            <Checkbox inline>3</Checkbox>
          </FormGroup>)
      }
      else if (field.element === 'radio') {
        returnField.push(<FormGroup>
          <ControlLabel>{field.label}</ControlLabel>
          <Radio name="radioGroup" inline>
            1
          </Radio>{' '}
          <Radio name="radioGroup" inline>
            2
          </Radio>{' '}
          <Radio name="radioGroup" inline>
            3
        </Radio>
        </FormGroup>);
      }
      form.push(returnField[0]);
    }
    return form
  }

const Render = (props) => {
    return (
        <div className="App">
            {createForm(props)}
        </div>
    );
}
export default Render;