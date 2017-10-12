// Include React
var React = require("react");

// Create the Main component
var EmployeeList = React.createClass({

    // getInitialState: function() {
    //     return {
    //         employeeList: []
    //     } 
    // },

    render: function(){


            return (
                <div>
                    <ul>
                        <li>Mariela Anderson
                        <br/>Sales Associate</li>
                        <li>Mariela Anderson
                        <br/>Sales Associate</li>
                        <li>Mariela Anderson
                        <br/>Sales Associate</li>
                        <li>Mariela Anderson
                        <br/>Sales Associate</li>
                        <li>Mariela Anderson
                        <br/>Sales Associate</li>
                    </ul>
                </div>
             )
            }

}); 

module.exports = EmployeeList;


 //           {this.props.employeeList.map(function(search, i) {
                  // <li key={i}>{search.firstName} {search.lastName}</li>
                   // <li key={i}>{search.Title}</li>   