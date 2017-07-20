/**
 * Created by sagardalvi on 14/07/17.
 */
import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, ButtonToolbar, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';
import {bindActionCreators} from 'redux';
import * as sagaHelpersActionCreators from '../../actionCreators/sagaHelpers'

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class ToDoForm extends Component {

    componentDidMount() {
        if (!this.props.toDoState.categories) {
            this.props.sagaHelpersActions.getCategories();
        }
    }

    render() {

        const {
            toDoState
            }=this.props;

        return (
            <div>
                <form>
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Description"
                        placeholder="Enter Description"
                        />
                    <FormGroup>
                        <ControlLabel>Due Date</ControlLabel>
                        <DatePicker id="example-datepicker"/>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Category</ControlLabel>
                        <FormControl componentClass="select" placeholder="Select Category">
                            <option value="select">Select</option>
                            {toDoState.categories ? toDoState.categories.map((repo,i)=> (<option key={i}  value={repo.key}>{repo.value}</option>)) : ""}
                        </FormControl>
                    </FormGroup>
                    <Checkbox>
                        Task completed
                    </Checkbox>
                    <ButtonToolbar>
                        <Button bsStyle="primary">Save</Button>
                        <Button>Cancel</Button>
                    </ButtonToolbar>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        toDoState: state.toDoReducer
    }
}

function mapDispathToProps(dispatch) {
    return {
        sagaHelpersActions: bindActionCreators(sagaHelpersActionCreators, dispatch)
    }

}


export default connect(mapStateToProps, mapDispathToProps)(ToDoForm);
