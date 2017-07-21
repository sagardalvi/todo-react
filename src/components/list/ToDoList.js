/**
 * Created by sagardalvi on 14/07/17.
 */
import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import {connect} from 'react-redux';
import * as sagaHelpersActionCreators from '../../actionCreators/sagaHelpers'
import {bindActionCreators} from 'redux';
import Task from './Task';


class ToDoList extends Component {


    componentDidMount() {
        if (!this.props.toDoState.tasks) {
            this.props.sagaHelpersActions.getAllTasks();
        }
    }

    render() {
        const {
            toDoState
            }=this.props;

        return (
            <Table responsive striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {toDoState.tasks ? toDoState.tasks.map((row, i)=> <Task key={row.id} task={row}/>) : ""}
                </tbody>
            </Table>
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


export default connect(mapStateToProps, mapDispathToProps)(ToDoList);
