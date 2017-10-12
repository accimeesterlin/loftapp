var React = require("react");
var reactPdf = require("react-pdf");
//var Img = require("react-image");

import { Document } from 'react-pdf/build/entry.webpack';
// Create the Main component
var Schedule = React.createClass({

	getInitialState: function() {
		return {
			numPages: null
		}
	},

	onDocumentLoad: function({numPages}) {
		this.setState({ numPages});
	},


  // Here we render the component
  	render: function() {

      	return (

	      	<div>
	      		<Document
	      			file="schedule.pdf"
	      			onLoadSuccess={this.onDocumentLoad} />
	      			
	     	</div>
     	)

 	}

});

// Export the component back for use in other files
module.exports = Schedule;
