/**
 * Created by sagardalvi on 14/07/17.
 */
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {connect} from 'react-redux';

class Header extends Component {


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
                        <Nav>
                            <li><a href="/">List</a></li>
                            <li><a href="/create">Create</a></li>
                        </Nav>
                        <Nav pullRight>
                            <li><a href="/about">About</a></li>
                            <NavItem href="#"></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

function mapStateToProps(state){
    return {
    }
}

function mapDispathToProps(dispatch){
    return {
    }

}


export default connect(mapStateToProps,mapDispathToProps)(Header);
