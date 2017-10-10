// Include React
var React = require("react");

// Requiring our helper for making API calls
var helpers = require("../../utils/helpers");

// Create the Main component
var Employees = React.createClass({

// set an id????????????
   getInitialState: function() {
      return {
          firstName: "",
          lastName: "",
          userName: "",
          title: "",
          password: ""
      } 
    },

  //  On load display the employees on the DB
    componentDidMount: function() {
       console.log("COMPONENT MOUNTED");

    // The moment the page renders on page load, we will retrieve the existing employees.

       helpers.getEmployees()
           .then(function(response) {
  
                 var employees = response.data.length ? response.data[0].employees : 0;
                      this.setState({
                      employees: employees
                      });
 
           }.bind(this));
    },

    render(){
        var employees = this.props.employees || [];

        var renderEmployees = employees.map(function(post, index) {
            return (
              <li key={index}>{renderEmployees}</li>
            ); 
        });

    return (
          <div>
            <p> LOFT Greatest Associates! </p>
            <ul>
              {renderEmployees}
            </ul>
          </div>
        );
    }
}); 

module.exports = Employees;