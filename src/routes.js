import React from 'react';
import {Route} from 'react-router';
import ToDoForm from './components/item/ToDoForm';
import About from './components/about/About';
import ToDoList from './components/list/ToDoList';

const routes = [
  <Route path="/" component={ToDoList}></Route>,
  <Route path="/about" component={About}></Route>,
  <Route path="/create" component={ToDoForm}></Route>
];

export default routes;