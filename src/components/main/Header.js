/**
 * Created by sagardalvi on 14/07/17.
 */
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import {connect} from 'react-redux';

const keyMap = {
    1 : '/',
    2 : '/create',
    3 : '/about'
};

export default class Header extends Component {



    handleSelect(selectedKey) {
        this.props.router.push(keyMap[selectedKey]);
    };

    render() {

        return (
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">TODO APP</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav onSelect={this.handleSelect.bind(this)}>
                            <NavItem href="#" eventKey={1}>List</NavItem>
                            <NavItem href="#" eventKey={2}>Create/Edit</NavItem>
                        </Nav>
                        <Nav pullRight onSelect={this.handleSelect.bind(this)}>
                            <NavItem href="#" eventKey={3}>About</NavItem>
                            <NavItem href="#"></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}
/*

function mapStateToProps(state){
    return {
    }
}

function mapDispathToProps(dispatch){
    return {
    }

}


export default connect(mapStateToProps,mapDispathToProps)(Header);
*/
