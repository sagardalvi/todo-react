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
        if (this.props.params.id && !this.props.toDoState.task) {
            this.props.sagaHelpersActions.getTask(this.props.params.id);
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
                        defaultValue = {toDoState.task ? toDoState.task.desc : ''}
                        />
                    <FormGroup>
                        <ControlLabel>Due Date</ControlLabel>
                        <DatePicker id="example-datepicker"
                                    dateFormat="DD-MM-YYYY"
                                    defaultValue ={toDoState.task ?  toDoState.task.due : ''}/>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Category</ControlLabel>
                        <FormControl componentClass="select" placeholder="Select Category" defaultValue={toDoState.task ?  toDoState.task.category : ''}>
                            <option value="select">Select</option>
                            {toDoState.categories ? toDoState.categories.map((repo,i)=> (<option key={i}  value={repo.key}>{repo.value}</option>)) : ""}
                        </FormControl>
                    </FormGroup>
                    <Checkbox checked={toDoState.task && toDoState.task.completed ?  true : false}>
                        Task completed
                    </Checkbox>
                    <ButtonToolbar>
                        <Button bsStyle="primary">Save</Button>
                        <Button onClick={()=>this.props.router.push('/')}>Cancel</Button>
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
