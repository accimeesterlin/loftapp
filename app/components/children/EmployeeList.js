// Include React
var React = require("react");

// Create the Main component
var EmployeeList = React.createClass({

    render: function(){

            var list = this.props.employeeList;
            console.log(Array.isArray(list));
            console.log(list);
            return (
                <div>
                     <ul>
                          {list.map(function(employee, index){
                              return <li key={index}>{employee.firstName} {employee.lastName} <br />{employee.title}</li>;
                           })}
                      </ul>
                </div>
             )
          }

}); 

module.exports = EmployeeList;