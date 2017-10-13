import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom';

import SignUp from './components/children/SignUp';
import SignIn from './components/children/SignIn';
import BulletinBoard from './components/children/BulletinBoard';
import EmployeeList from './components/children/Employee.List';
import Schedule from './components/children/Schedule';


const NoMatch = ({ xs }) => (
    <div>page not found</div>
    )

const Route = () => (
  <Router className={indexCss}>
      <div>
          <Navbar/>
          <Switch className="body">

            <Route path="/SignUp" component={SignUp}/>
            <Route path="/SignIn" component={SignIn}/>

            <Route component={NoMatch}/>
        </Switch>
    </div>    
 </Router>
)

export default Route;