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


    createNewTask() {
        var newTask = {
            desc: this.desc.value,
            due: this.refs.dueDate.getValue(),
            category: parseInt(this.category.value),
            completed: false
        };
        this.props.sagaHelpersActions.createNewTask(newTask);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.toDoState.showlist){
            nextProps.router.push('/');
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
                        inputRef={(ref) => {this.desc = ref}}
                        placeholder="Enter Description"
                        //value = {toDoState.task ? toDoState.task.desc : undefined}
                        />
                    <FormGroup>
                        <ControlLabel>Due Date</ControlLabel>
                        <DatePicker id="example-datepicker"
                                    dateFormat="DD-MM-YYYY"
                                    ref="dueDate"
                            //value ={toDoState.task ?  toDoState.task.due : undefined}
                            />
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Category</ControlLabel>
                        <FormControl componentClass="select" placeholder="Select Category"
                                     inputRef={(ref) => {this.category = ref}}
                            //value={toDoState.task ?  toDoState.task.category : undefined}
                            >
                            <option value="select">Select</option>
                            {toDoState.categories ? toDoState.categories.map((repo, i)=> (
                                <option key={i} value={repo.id}>{repo.value}</option>)) : ""}
                        </FormControl>
                    </FormGroup>
                    <Checkbox
                        //checked={toDoState.task && toDoState.task.completed ?  true : false}
                        ref="status">
                        Task completed
                    </Checkbox>
                    <ButtonToolbar>
                        <Button bsStyle="primary" onClick={this.createNewTask.bind(this)}>Save</Button>
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
