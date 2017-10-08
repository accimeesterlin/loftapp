// Include React
var React = require("react");


// Create the Main component
var Main = React.createClass({

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
                      <div className="panel-body">Display all the registered employees with name, title and phone</div>
                 </div>
              </div>
              <div className="col-sm-6"> 
                 <div className="panel">
                      <div className="panel-heading">This Week's Schedule</div>
                      <div className="panel-body">Display the picture of schedule</div>
                 </div>
              </div>
          </div>

          <div className="row">
             <div className="col-sm-12"> 
                 <div className="panel">
                      <div className="panel-heading">Messages</div>
                      <div className="panel-body">post it notes that the employess can create, edit, and delete</div>
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
