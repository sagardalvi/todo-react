import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ToDoForm from './components/item/ToDoForm';
import About from './components/about/About';
import ToDoList from './components/list/ToDoList';

const routes = [
  <IndexRoute component={ToDoList}/>,
  <Route path="/about" component={About}/>,
  <Route path="/create" component={ToDoForm}/>,
  <Route path="/edit/:id" component={ToDoForm}/>
];

export default routes;