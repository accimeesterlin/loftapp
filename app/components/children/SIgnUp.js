var React = require("react");

 
// Create the Main component
class SignUp extends Component{

    constructor(){
      super();
      this.state = {newEmployee: {
          firstName: "",
          lastName:  "",
          userName:  "",
          title:  "",
          password:  ""
          };
      }
    }

    //create a drop-down for employee type
    static defaultProps ={
        titles: [
            "Sales Associate",
            "Sales Lead",
            "Manager",
            "Co-Manager"
        ]
    }
    //function for submitting the form
    handleSubmit(event){
      event.preventDefault();
      console.log("Submitted");
      this.setState({newEmployee: {
          firstName: this.refs.firstName.value,
          lastName: this.refs.lastName.value,
          userName: this.refs.userName.value,
          title: this.refs.title.value,
          password: this.refs.password.value
      }}, function(){
          console.log(this.state);

          //pass the date as a property to the main component here
          this.props.addEmployee(this.state.newEmployee);
      });
    }

    // Here we render the component
    render() {

      let titleOptions = this.props.titles.map(title => {
          return
              <option key={title} value={title}>{title}</option>
      });

      return (
          <div className="signUpForm">
              <h3>Sign Up!</h3>
              <form onSubmit = {this.handleSubmit.bind(this)}
                  <div>
                      <label>First Name</label>
                      <br />
                      <input type="text" ref="firstName" />
                  </div>
                  <div>
                      <label>Last Name</label>
                      <br />
                      <input type="text" ref="lastName" />
                  </div>
                  <div>
                      <label>User Name</label>
                      <br />
                      <input type="text" ref="userName" />
                  </div>
                  <div>
                      <label>Title</label>
                      <br />
                      <select ref="title">
                          titleOptions{}
                      </select>
                  </div>
                  <div>
                      <label>Password</label>
                      <br />
                      <input type="text" ref="password" />
                  </div>
                  <div>
                      <label>Re-enter Password</label>
                      <br />
                      <input type="text" ref="password" />
                  </div>
                  <button>
                      <input type="submit" value="Submit">
                          Sign Up!
                      </input>
                  </button>
              </form> 
          </div>
      )

  }

)};

// Export the component back for use in other files
module.exports = SignUp;
