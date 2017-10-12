// Include React
var React = require("react");

var EmployeeList = require("./children/EmployeeList");
var BulletinBoard = require("./children/BulletinBoard");
var Schedule = require("./children/Schedule");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");
// Create the Main component
var Main = React.createClass({
//class Main extends React.Component ({

  getInitialState: function() {
    return { employeeList:[], schedule: "", bulletinBoard: "" };
  },

  //  On load display the employees from  the DB
  componentDidMount: function() {
      console.log("COMPONENT MOUNTED in main.js");

    // The moment the page renders on page load, we will retrieve the existing employees.
      helpers.getEmployees()
           .then(function(response) {
                console.log("inside .then ");
                console.log(response);
         
                if (response !== this.state.employeeList) {
                    console.log("EmployeeList", response.data);
                    this.setState({employeeList: response.data});
                }
           }.bind(this));
    },


  // Here we render the component
  render: function() {

    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h1>LOFT App</h1>
            <h3>Check the schedule, post requests and send messages to your co-workers!</h3>
          </div>

          <div className="row">
            <div className="text-center">
                <button className = "btn-lg">SIGN UP!</button>
                <button className = "btn-lg">SIGN IN</button> 
                <button className = "btn-lg">SIGN OUT</button> 
            </div>
          </div>

          <div className="row">
              <div className="col-sm-6"> 
                 <div className="panel">
                      <div className="panel-heading ">Loft Girls</div>
                      <div className="panel-body">
                            <EmployeeList employeeList={this.state.employeeList}>

                            </EmployeeList>
                      </div>
                 </div>
              </div>
              <div className="col-sm-6"> 
                 <div className="panel">
                      <div className="panel-heading">This Week's Schedule</div>
                      <div className="panel-body">
                          <Schedule schedule={this.state.schedule}>
                          </Schedule>
                      </div>
                 </div>
              </div>
          </div>

          <div className="row">
             <div className="col-sm-12"> 
                 <div className="panel">
                      <div className="panel-heading">
                          Messages
                      </div>
                      <div className="panel-body panelBodyWidthHeight">
                      
                           <BulletinBoard bulletinBoard={this.state.bulletinBoard}>
                                
                          </BulletinBoard>
                      </div>
                  </div>
              </div>
          </div>          
 
      </div>

    </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
