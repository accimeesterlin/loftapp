// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmployeesSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  userName: {
    type: String,
    trim: true,
    required: "User Name is Required"
  },
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  password: {
  	type: String,
  	trim: true,
  	required: "Password is Required"
  }

});

// Create the Model
var Employees = mongoose.model('Employees', EmployeesSchema);

// Export it for use elsewhere
module.exports = Employees;