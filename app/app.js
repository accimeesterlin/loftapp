// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Grabs the Routes
// var routes = require("./config/routes");

// We need to include all of the components we are using
import Routes from './utils/routes';



ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.

  	<Routes />, 
   document.getElementById("app")
);
