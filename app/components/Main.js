// Include React
var React = require("react");

var Employees = require("./children/Employees");
var BulletinBoard = require("./children/BulletinBoard");
var Schedule = require("./children/Schedule");
// Create the Main component
var Main = React.createClass({
//class Main extends React.Component ({

  getInitialState: function() {
    return { employeeList: "", schedule: "", bulletinBoard: "" };
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
                            <Employees employeeList={this.state.employeeList}>
                                Display all the registered employees with name, title and phone
                            </Employees>
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
