/**
 * Created by sagardalvi on 14/07/17.
 */
import React, {PureComponent} from 'react';
import { Button, Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class Task extends PureComponent {


    render() {
        const {
            task,
            handleEdit,
            handleRemove
            } = this.props;

        const tooltip = (text, i) => (<Tooltip id={'tooltip-'+i}>{text}</Tooltip>);
        const id= task.id;

        return (
            <tr>
                <td>{task.desc}</td>
                <td>{task.category}</td>
                <td>{task.due.split('T')[0]}</td>
                <td>{task.completed ? 'Done' : 'Pending'}</td>
                <td>
                    <OverlayTrigger placement="bottom" overlay={tooltip('Edit', 1)}>
                        <Button bsStyle="link" bsSize='xs' onClick={()=>handleEdit(id)}><i className="glyphicon glyphicon-pencil" title="Edit" ></i></Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={tooltip('Remove', 2)}>
                        <Button bsStyle="link" bsSize='xs' onClick={()=>handleRemove(id)}><i className="glyphicon glyphicon-trash"  title="Remove"></i></Button>
                    </OverlayTrigger>
                </td>
            </tr>
        );
    }
}
