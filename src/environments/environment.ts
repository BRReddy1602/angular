import React, { Component } from 'react';
import './Create.css';
import { FormGroup, ControlLabel, FormControl, Checkbox, Radio } from 'react-bootstrap';

class Render extends Component {
    constructor(props, context) {
        super(props, context);
        this.addNewRow = this.addNewRow.bind(this);
        this.state = {
            value: '',
            fields: []
        };
        this.fields = [],
            this.singleForm = {
                propertyName: '',
                label: '',
                elementType: '',
                values: []
            };
    }

    addNewRow() {
        this.fields.push(this.singleForm);
        this.forceUpdate();
    }
    createForm = () => {
        let form = [],
            constants = [
                {
                    id: 1,
                    name: 'input'
                },
                {
                    id: 2,
                    name: 'radio'
                },
                {
                    id: 3,
                    name: 'checkbox'
                },
                {
                    id: 4,
                    name: 'dropdown'
                }
            ];
        if (!this.fields.length) {
            this.fields.push(this.singleForm);
        }

        for (var x = 0; x < this.fields.length; x++) {
            let field = form[x];
            let values = [];
            values.push(<option value="Select">Select</option>);
            for (var i = 0; i < constants.length; i++) {
                let value = constants[i];
                values.push(<option value={value.id}>{value.name || value.id}</option>)
            };
            form.push(<div className="row">
                <FormGroup>
                    <div className="col-xs-3">
                        <FormControl componentClass="select" placeholder="Select Component">
                            {values}
                        </FormControl>
                    </div>
                    <div className="col-xs-3">
                        <input className="form-control"
                            type="text"
                            placeholder="Enter Label" />
                    </div>
                    <div className="col-xs-3">
                        <input className="form-control"
                            type="text"
                            placeholder="Enter Property Name" />
                    </div>
                    <div className="col-xs-3">
                        {/* //need to write based on operator selected */}
                    </div>
                </FormGroup>
            </div>);
            // if()
        };
        return form;
    }

    render() {
        return (
            <div className="App">
                <div className="col-xs-12 row">
                    <button className="btn btn-primary col-xs-2" onClick={this.addNewRow}>Add New Field</button>
                </div>
                {this.createForm()}
                {/* <Render fields={this.state.fields}></Render> */}
            </div>
        );
    }
}

export default Render;
