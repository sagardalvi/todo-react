/**
 * Created by sagardalvi on 14/07/17.
 */
import React, {PureComponent} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


export default  class About extends PureComponent {


    render() {

        return (
            <ListGroup>
                <ListGroupItem>List of all available Items</ListGroupItem>
                <ListGroupItem>Create new TODO item</ListGroupItem>
                <ListGroupItem>Edit existed TODO item</ListGroupItem>
                <ListGroupItem>Delete existed TODO item</ListGroupItem>
            </ListGroup>
        );
    }
}

