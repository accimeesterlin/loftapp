// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {
  // Returns a promise object we can .then() off inside our Parent component
  getEmployees: function() {
    return axios.get("/api");
  },
  // This method takes in an argument for what to post to the database
  addEmployee: function(employee) {
    return axios.post("/api", employee);
  }

  // Delete employee

  //Update employee
};