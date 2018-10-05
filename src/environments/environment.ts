import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      fields: []
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  componentDidMount() {
    fetch("https://api.myjson.com/bins/1dvwhs")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            value: true,
            fields: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  createForm = () => {
    let form = []
    for (let i = 0; i < this.state.fields.length; i++) {
      let field = this.state.fields[i],
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
  render() {
    return (
      <div className="App">
        {/* <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}>
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange} />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>
        <form className="form-horizontal">
          <FormGroup>
            <div className="col-xs-3">
              <ControlLabel>Text</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
                className="form-control" />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="col-xs-3">
              <ControlLabel>Email address</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl id="formControlsEmail"
                type="text"
                label="email"
                placeholder="Enter email" />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="col-xs-3">
              <ControlLabel>Password</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl id="formControlsPassword"
                type="password"
                label="password"
                placeholder="Enter password" />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="col-xs-3">
              <ControlLabel>File</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl id="formControlsPassword"
                type="file"
                label="password"
                placeholder="Example block-level help text here." />
            </div>
          </FormGroup>
          <div className="col-xs-12">
            <div className="col-xs-3">
              <Checkbox checked readOnly>
                Checkbox
    </Checkbox>
              <Radio checked readOnly>
                Radio
    </Radio>

              <FormGroup>
                <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
                <Checkbox inline>3</Checkbox>
              </FormGroup>
              <FormGroup>
                <Radio name="radioGroup" inline>
                  1
      </Radio>{' '}
                <Radio name="radioGroup" inline>
                  2
      </Radio>{' '}
                <Radio name="radioGroup" inline>
                  3
      </Radio>
              </FormGroup>
            </div>
          </div>
          <br />
          <FormGroup controlId="formControlsSelect">
            <div className="col-xs-3">
              <ControlLabel>Select</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
            </div>
          </FormGroup>
          <FormGroup controlId="formControlsSelectMultiple">
            <div className="col-xs-3">
              <ControlLabel>Multiple select</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl componentClass="select" multiple>
                <option value="select">select (multiple)</option>
                <option value="other">...</option>
                <option value="other1">other1</option>
                <option value="other2">other2</option>
              </FormControl>
            </div>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <div className="col-xs-3">
              <ControlLabel>Textarea</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl componentClass="textarea" placeholder="textarea" />
            </div>
          </FormGroup>

          <FormGroup>
            <div className="col-xs-3">
              <ControlLabel>Static text</ControlLabel>
            </div>
            <div className="col-xs-3">
              <FormControl.Static>email@example.com</FormControl.Static>
            </div>
          </FormGroup>
          <Button type="submit" className="btn btn-primary">Submit</Button>
        </form> */}
        {this.createForm()}
      </div>
    );
  }
}

export default App;
