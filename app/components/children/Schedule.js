var React = require("react");
var reactPdf = require("react-pdf");
//var Img = require("react-image");

import { Document } from 'react-pdf/build/entry.webpack';
// Create the Main component
class Schedule extends React.Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
			numPages: null
	  }
	}

	onDocumentLoad(numPages) {
		this.setState({ numPages});
	}


  // Here we render the component
  	render() {

      	return (

	      	<div className="pdf-container">
	      		<div>
		      		<label htmlFor="file">Load from file:</label>
		      		<input type="file" />
	      		</div>
	      		<div className="pdf-document">

		      		<Document file="schedule.pdf" onLoadSuccess={this.onDocumentLoad}>
	      			</Document>
	     		</div>
	     	</div>
     	)

 	}
}
// Export the component back for use in other files
export default Schedule;
