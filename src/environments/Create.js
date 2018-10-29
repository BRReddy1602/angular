import React, { Component } from 'react';
import './Create.css';
import { FormGroup, Modal, Button, Tabs, Tab, Table, Checkbox } from 'react-bootstrap';

class Render extends Component {

    constructor(props, context) {
        super(props, context);
        this.addNewRow = this.addNewRow.bind(this);
        this.addNewSection = this.addNewSection.bind(this);
        this.addNewValue = this.addNewValue.bind(this);
        this.saveLayout = this.saveLayout.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.createProps = this.createProps.bind(this);
        this.deleteMetric = this.deleteMetric.bind(this);
        this.deleteSection = this.deleteSection.bind(this);
        this.state = {
            show: false
        };
        this.state = {
            gridCode: '',
            gridName: '',
            value: '',
            sections: [],
            fields: []
        };
    }

    createValidations(field, x, y) {
        var props = [];
        props.push(<div className="validations"><div className="row">
            <FormGroup>
                <div className="col-xs-4">
                    <label>
                        Max Length
                </label>
                </div>
                <div className="col-xs-6">
                    <input className="form-control"
                        type="text"
                        value={this.state.sections[y].fields[x].maxLength}
                        onChange={this.handleValidationChange.bind(this, 'maxLength', x, y)}
                        placeholder="Enter Max Length" />
                </div>
            </FormGroup>
        </div>
            <div className="row">
                <FormGroup>
                    <div className="col-xs-4">
                        <label>
                            Starts With
            </label>
                    </div>
                    <div className="col-xs-6">
                        <input className="form-control"
                            type="text"
                            value={this.state.sections[y].fields[x].startsWith}
                            onChange={this.handleValidationChange.bind(this, 'startsWith', x, y)}
                            placeholder="Enter Starts With" />
                    </div>
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup>
                    <div className="col-xs-4">
                        <label>
                            Ends With
            </label>
                    </div>
                    <div className="col-xs-6">
                        <input className="form-control"
                            type="text"
                            value={this.state.sections[y].fields[x].endsWith}
                            onChange={this.handleValidationChange.bind(this, 'endsWith', x, y)}
                            placeholder="Enter Ends with" />
                    </div>
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup>
                    <div className="col-xs-4">
                        <label>
                            Min Length
            </label>
                    </div>
                    <div className="col-xs-6">
                        <input className="form-control"
                            type="text"
                            value={this.state.sections[y].fields[x].minLength}
                            onChange={this.handleValidationChange.bind(this, 'minLength', x, y)}
                            placeholder="Enter Min Length" />
                    </div>
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup>
                    <div className="col-xs-4">
                        <label>
                            Allowed Special Chars
            </label>
                    </div>
                    <div className="col-xs-6">
                        <select className="form-control" value={this.state.sections[y].fields[x].allowedSpecialChars} onChange={this.handleValidationChange.bind(this, 'allowedSpecialChars', x, y)} placeholder="Select">
                            <option value="Select">Select</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup>
                    <div className="col-xs-4">
                        <label>
                            Allowed Chars
            </label>
                    </div>
                    <div className="col-xs-6">
                        <select className="form-control" value={this.state.sections[y].fields[x].allowedChars} onChange={this.handleValidationChange.bind(this, 'allowedChars', x, y)} placeholder="Select">
                            <option value="Select">Select</option>
                            <option value="numeric">Numeric</option>
                            <option value="alphaNumeric">Alpha Numeric</option>
                        </select>
                    </div>
                </FormGroup>
            </div>
        </div>);
        return props;
    }

    createStyles(field, x, y) {
        var props = [];
        props.push(<div className="validations">
            <div className="row">
                <FormGroup>
                    <div className="col-xs-4">
                        <label>
                            Font Weight
                </label>
                    </div>
                    <div className="col-xs-6">
                        <select className="form-control" value={this.state.sections[y].fields[x].fontWeight} onChange={this.handleStyleChange.bind(this, 'fontWeight', x, y)} placeholder="Select">
                            <option value="normal">Normal</option>
                            <option value="bold">Bold</option>
                            <option value="bolder">Bolder</option>
                            <option value="lighter">Lighter</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                            <option value="900">900</option>
                        </select>
                    </div>
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup>
                    <div className="col-xs-4">
                        <label>
                            Font Family
                </label>
                    </div>
                    <div className="col-xs-6">
                        <select className="form-control" value={this.state.sections[y].fields[x].fontFamily} onChange={this.handleStyleChange.bind(this, 'fontFamily', x, y)} placeholder="Select">
                            <option value="Georgia">Georgia</option>
                            <option value="Book Antiqua">Book Antiqua</option>
                            <option value="Palatino Linotype">Palatino Linotype</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Arial">Arial</option>
                            <option value="Helvetica">Helvetica</option>
                            <option value="Arial Black">Arial Black</option>
                            <option value="Impact">Impact</option>
                            <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
                            <option value="Tahoma">Tahoma</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Courier New">Courier New</option>
                            <option value="Lucida Console">Lucida Console</option>
                        </select>
                    </div>
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup>
                    <div className="col-xs-4">
                        <label>
                            Font Size
            </label>
                    </div>
                    <div className="col-xs-6">
                        <input className="form-control"
                            type="text"
                            value={this.state.sections[y].fields[x].fontSize}
                            onChange={this.handleStyleChange.bind(this, 'fontSize', x, y)}
                            placeholder="Enter font size" />
                    </div>
                </FormGroup>
            </div>
        </div>);
        return props;
    }

    createDropdownValues(field, x, y) {
        var props = [];
        if (!this.state.sections[y].fields[x].values.length) {
            this.state.sections[y].fields[x].values.push({
                id: '',
                label: ''
            });
        }
        props.push(<div>
            <button className="btn btn-info" onClick={this.addNewValue.bind(this, x, y)}>Add Value</button>
            <br /><br />
        </div>);
        for (var i = 0; i < this.state.sections[y].fields[x].values.length; i++) {
            props.push(<div className='row'>
                <div className="col-xs-1">
                    {i + 1}
                </div>
                <div className="col-xs-3">
                    <input className="form-control"
                        type="text"
                        value={this.state.sections[y].fields[x].values[i].id}
                        onChange={this.handleFieldValueChange.bind(this, this.state.sections[y].fields[x].values, 'id', x, y, i)}
                        placeholder="Enter Id" />
                </div>
                <div className="col-xs-3">
                    <input className="form-control"
                        type="text"
                        value={this.state.sections[y].fields[x].values[i].label}
                        onChange={this.handleFieldValueChange.bind(this, this.state.sections[y].fields[x].values, 'label', x, y, i)}
                        placeholder="Enter Label" />
                </div>
            </div>
            );
        }
        return props;
    }

    createQualtative(field, x, y) {
        var props = [];
        if (!this.state.sections[y].fields[x].values.length) {
            this.state.sections[y].fields[x].values.push({
                id: '',
                label: ''
            });
        }
        props.push(<div>
            <button className="btn btn-info" onClick={this.addNewValue.bind(this, x, y)}>Add Rating</button>
            <br /><br />
        </div>);
        for (var i = 0; i < this.state.sections[y].fields[x].values.length; i++) {
            props.push(<div className='row'>
                <div className="col-xs-1">
                    {i + 1}
                </div>
                <div className="col-xs-5">
                    <input className="form-control"
                        type="text"
                        value={this.state.sections[y].fields[x].values[i].label}
                        onChange={this.handleFieldValueChange.bind(this, this.state.sections[y].fields[x].values, 'label', x, y, i)}
                        placeholder="Enter Column Name" />
                </div>
            </div>
            );
        }
        return props;
    }

    createQualtativeRows(field, x, y) {
        var props = [];
        if (!this.state.sections[y].fields[x].rows.length) {
            this.state.sections[y].fields[x].rows.push({
                id: '',
                label: ''
            });
        }
        props.push(<div>
            <button className="btn btn-info" onClick={this.addQuantRow.bind(this, x, y)}>Add Row</button>
            <br /><br />
        </div>);
        for (var i = 0; i < this.state.sections[y].fields[x].rows.length; i++) {
            props.push(<div className='row'>
                <div className="col-xs-1">
                    {i + 1}
                </div>
                <div className="col-xs-5">
                    <input className="form-control"
                        type="text"
                        value={this.state.sections[y].fields[x].rows[i].label}
                        onChange={this.handleRowValueChange.bind(this, this.state.sections[y].fields[x].rows, 'label', x, y, i)}
                        placeholder="Enter Row Label" />
                </div>
            </div>
            );
        }
        return props;
    }

    buildQualtativeSection(field, x, y) {
        var props = [], form = [], cols = [];
        var heading = [], temp = [];
        heading.push(<th></th>);
        for (var i = 0; i < this.state.sections[y].fields[x].values.length; i++) {
            heading.push(
                <th>
                    {this.state.sections[y].fields[x].values[i].label}
                </th>
            );
        }
        temp.push(<thead><tr>
            {heading}
        </tr></thead>);
        props.push(temp);
        for (var i = 0; i < this.state.sections[y].fields[x].rows.length; i++) {
            cols = [];
            cols.push(
                <td>
                    {this.state.sections[y].fields[x].rows[i].label}
                </td>
            );
            for (var j = 0; j < this.state.sections[y].fields[x].values.length; j++) {
                var prop = this.state.sections[y].fields[x].values[j].label;
                cols.push(
                    <td>
                        <Checkbox
                            defaultChecked
                            onChange={this.handleCheckboxChange.bind(this, this.state.sections[y].fields[x].values[j].label, x, y, j, i)}
                            value={this.state.sections[y].fields[x].qualtative[prop]}>
                        </Checkbox>
                    </td>
                );
            }
            props.push(
                <tr>
                    {cols}
                </tr>
            );
        }

        form.push(<Table className="qualtative-table" striped bordered condensed hover responsive>
            {props}
        </Table>);
        return form;
    }

    createProps(field, x, y) {
        var props = [];
        props.push(
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                {this.state.sections[y].fields[x].elementType == 5 ? <Tab eventKey={1} title="Ratings">
                    <div className="tab-body">
                        {this.createQualtative(field, x, y)}
                    </div>
                </Tab> : null}
                {this.state.sections[y].fields[x].elementType == 5 ? <Tab eventKey={2} title="Rows">
                    <div className="tab-body">
                        {this.createQualtativeRows(field, x, y)}
                    </div>
                </Tab> : null}
                {this.state.sections[y].fields[x].elementType == 5 && this.state.sections[y].fields[x].values.length && this.state.sections[y].fields[x].rows.length ? <Tab eventKey={3} title="Qualtative">
                    <div className="tab-body">
                        {this.buildQualtativeSection(field, x, y)}
                    </div>
                </Tab> : null}
                {this.state.sections[y].fields[x].elementType != 5 ? <Tab eventKey={1} title="Validations">
                    <div className="tab-body">
                        {this.createValidations(field, x, y)}
                    </div>
                </Tab> : null}
                {this.state.sections[y].fields[x].elementType == 4 || this.state.sections[y].fields[x].elementType == 2 || this.state.sections[y].fields[x].elementType == 3 ? <Tab eventKey={2} title="Values">
                    <div className="tab-body">{this.createDropdownValues(field, x, y)}</div>
                </Tab> : null}
                <Tab eventKey={4} title="Styles">
                    <div className="tab-body">
                        {this.createStyles(field, x, y)}
                    </div>
                </Tab>
            </Tabs>);

        return props;

    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow(x, y) {
        this.setState({
            show: true,
            x: x,
            y: y
        });
    }

    saveLayout() {
        console.log(this.state);
    }

    addNewRow(index, event) {
        this.state.sections[index].fields.push({
            propertyName: '',
            label: '',
            elementType: '',
            values: [],
            qualtative: [],
            rows: [],
            validation: {},
            style: {}
        });
        this.setState({
            sections: this.state.sections
        });
        this.forceUpdate();
    }

    addNewValue(x, y) {
        this.state.sections[x].fields[y].values.push({
            id: '',
            label: ''
        });
        this.setState({
            sections: this.state.sections
        });
    }

    addQuantRow(x, y) {
        this.state.sections[x].fields[y].rows.push({
            id: '',
            label: ''
        });
        this.setState({
            sections: this.state.sections
        });
    }

    addNewSection() {
        this.state.sections.push({
            sectionId: this.state.sections.length + 1,
            sectionName: '',
            label: '',
            fields: []
        });
        this.setState({
            sections: this.state.sections
        });
        this.forceUpdate();
    }

    handleChange(field, prop, index, y, event) {
        this.state.sections[y].fields[index][prop] = event.target.value;
        this.setState({
            fields: this.state.sections[y].fields
        });
    }

    handleCheckboxChange(prop, index, y, j, i, event) {
        var row = this.state.sections[y].fields[index].rows[i].label;
        if (!this.state.sections[y].fields[index].qualtative[row])
            this.state.sections[y].fields[index].qualtative[row] = {};
        this.state.sections[y].fields[index].qualtative[row][prop] = event.target.checked;
        this.setState({
            sections: this.state.sections
        });
    }

    handleValidationChange(prop, index, y, event) {
        this.state.sections[y].fields[index].validation[prop] = event.target.value;
        this.setState({
            sections: this.state.sections
        });
    }

    handleStyleChange(prop, index, y, event) {
        this.state.sections[y].fields[index].style[prop] = event.target.value;
        this.setState({
            sections: this.state.sections
        });
    }

    deleteMetric(index, y, event) {
        this.state.sections[y].fields.splice(index, 1);
        this.setState({
            sections: this.state.sections
        });
    }

    deleteSection(y, event) {
        this.state.sections.splice(y, 1);
        this.setState({
            sections: this.state.sections
        });
    }

    handleFieldValueChange(field, prop, x, y, i, event) {
        this.state.sections[y].fields[x].values[i][prop] = event.target.value;
        this.setState({
            sections: this.state.sections
        });
    }

    handleRowValueChange(field, prop, x, y, i, event) {
        this.state.sections[y].fields[x].rows[i][prop] = event.target.value;
        this.setState({
            sections: this.state.sections
        });
    }

    handleSectionChange(field, prop, index, event) {
        this.state.sections[index].sectionId = index;
        this.state.sections[index][prop] = event.target.value;
        this.setState({
            sections: this.state.sections
        });
    }

    handleDirectChange(prop, event) {
        if (prop === 'gridCode')
            this.setState({
                gridCode: event.target.value
            });
        else if (prop === 'gridName')
            this.setState({
                gridName: event.target.value
            });
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
                },
                {
                    id: 5,
                    name: 'Qualtative Section'
                }
            ];

        form.push(<div><div className="row">
            <FormGroup>
                <div className="col-xs-3">
                    <label>
                        Enter Grid Code
                    </label>
                </div>
                <div className="col-xs-3">
                    <input className="form-control"
                        type="text"
                        value={this.state.gridCode}
                        onChange={this.handleDirectChange.bind(this, 'gridCode')}
                        placeholder="Enter Grid Code" />
                </div>
            </FormGroup>
        </div>
            <div className="row">
                <FormGroup>
                    <div className="col-xs-3">
                        <label>
                            Enter Grid Name
                    </label>
                    </div>
                    <div className="col-xs-3">
                        <input className="form-control"
                            type="text"
                            value={this.state.gridName}
                            onChange={this.handleDirectChange.bind(this, 'gridName')}
                            placeholder="Enter Grid Name" />
                    </div>
                </FormGroup>
            </div></div>);
        //creating sections if gridCode & gridName exists
        if (this.state.gridCode && this.state.gridName) {
            if (!this.state.sections.length) {
                this.state.sections.push({
                    sectionId: 1,
                    sectionName: '',
                    label: '',
                    fields: []
                });
            }
            form.push(<h4>Sections</h4>);
            for (var y = 0; y < this.state.sections.length; y++) {
                form.push(<div className="row top-line">
                    <FormGroup>
                        <div className="col-xs-2">
                            <label>
                                Section Name
                    </label>
                        </div>
                        <div className="col-xs-3">
                            <input className="form-control"
                                type="text"
                                value={this.state.sections[y].label}
                                onChange={this.handleSectionChange.bind(this, this.state.sections[y], 'label', y)}
                                placeholder="Enter Section Name" />
                        </div>
                        <div className="col-xs-2">
                            <button className="btn btn-warning" onClick={this.addNewRow.bind(this, y)}>+ Metrics</button>
                        </div>
                        <div className="col-xs-2">
                            <button className="btn btn-danger" onClick={this.deleteSection.bind(this, y)}>- section</button>
                        </div>
                    </FormGroup>
                </div>);
                //creating fields/metrics
                if (this.state.sections[y].fields.length)
                    form.push(<h5>Metrics</h5>);
                // if (!this.state.sections[y].fields.length) {
                //     this.state.sections[y].fields.push({
                //         propertyName: '',
                //         label: '',
                //         elementType: '',
                //         values: []
                //     });
                // }
                for (var x = 0; x < this.state.sections[y].fields.length; x++) {
                    let values = [];
                    values.push(<option value="Select">Select</option>);
                    for (var i = 0; i < constants.length; i++) {
                        let value = constants[i];
                        values.push(<option value={value.id}>{value.name || value.id}</option>)
                    };
                    form.push(<div className="row">
                        <FormGroup>
                            <div className="col-xs-3">
                                <select className="form-control" value={this.state.sections[y].fields[x].elementType} onChange={this.handleChange.bind(this, this.state.sections[y].fields[x], 'elementType', x, y)} placeholder="Select Component">
                                    {values}
                                </select>
                            </div>
                            <div className="col-xs-3">
                                <input className="form-control"
                                    type="text"
                                    value={this.state.sections[y].fields[x].label}
                                    onChange={this.handleChange.bind(this, this.state.sections[y].fields[x], 'label', x, y)}
                                    placeholder="Enter Label" />
                            </div>
                            <div className="col-xs-3">
                                <input className="form-control"
                                    type="text"
                                    value={this.state.sections[y].fields[x].propertyName}
                                    onChange={this.handleChange.bind(this, this.state.sections[y].fields[x], 'propertyName', x, y)}
                                    placeholder="Enter Property Name" />
                            </div>
                            <div className="col-xs-3">
                                {/* {this.state.sections[y].fields[x].elementType} */}
                                <button className="btn btn-info" onClick={this.handleShow.bind(this, x, y)}>
                                    + More Details
                                </button>
                                <button className="btn btn-danger" onClick={this.deleteMetric.bind(this, x, y)}>
                                    - Metric
                                </button>

                                {/* //need to write based on operator selected */}
                            </div>
                        </FormGroup>
                    </div>);
                    // if()
                };
                if (this.state.show) {
                    form.push(<Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Properties for {this.state.sections[this.state.y].fields[this.state.x].label}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.createProps(this.state.sections[this.state.y].fields[this.state.x], this.state.x, this.state.y)}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>)
                }
                // if()
            };

            form.push(<div className='row'><button className="btn btn-primary col-xs-2" onClick={this.addNewSection}>Add Section</button></div>);
        }
        return form;
    }

    render() {
        return (
            <div className="App create-form">
                {/* <div className="col-xs-12 row">
                    <button className="btn btn-primary col-xs-2" onClick={this.addNewRow}>Add Field</button>
                </div> */}
                {this.createForm()}
                <button className="btn btn-success col-xs-2 save-button" onClick={this.saveLayout}>Save</button>
                {/* <Render fields={this.state.sections[y].fields}></Render> */}
            </div>
        );
    }
}

export default Render;
