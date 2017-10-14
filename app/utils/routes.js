import React, { Component } from 'react';

import {
  Router,
  Route,
  browserHistory
} from 'react-router';

// import SignUp from './components/children/SignUp';
// import SignIn from './components/children/SignIn';
// import BulletinBoard from './components/children/BulletinBoard';
// import EmployeeList from './components/children/Employee.List';
import Schedule from '../components/children/Schedule';


const NoMatch = ({ xs }) => (
    <div>page not found</div>
    )

const Routes = () => (
  <Router history = {browserHistory}>
      <Route path = '/'component = {Schedule}/>
 </Router>
)

export default Routes;