/**
 * Created by sagardalvi on 14/07/17.
 */
import React, {PureComponent} from 'react';
import { Table } from 'react-bootstrap';
import {connect} from 'react-redux';


export default class Task extends PureComponent {


    render() {
        const {
            task
            } = this.props;

        return (
            <tr>
                <td>{task.desc}</td>
                <td>{task.category}</td>
                <td>{task.due}</td>
                <td>{task.completed ? 'Done' : 'Pending'}</td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
        );
    }
}
