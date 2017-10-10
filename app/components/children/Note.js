// Include React
var React = require("react");
var ReactDraggable = require("react-draggable");

//class BulletinBoard extends React.Component ({
var Note = React.createClass({

	getInitialState(){
		return{editing: false}
	},

	componentWillMount() {
		this.style = {
			right: this.randomBetween(0, this.innerWidth - 150, "px"),
			top: this.randomBetween(0, this.innerHeight - 150, "px")
		}

	},

	componentDidUpdate(){
		if(this.state.editing){
			this.refs.newText.focus()
			this.refs.newText.select()
		}
	},
	// // this prevents unnecessary re-rendering
	// shouldComponentUpdate(nextProps, nextState){
	// 	return this.props.children !== nextProps.children || this.state !== next.state 

	// },

	randomBetween(x, y, s) {
		return (x + Math.ceil(Math.random() * (y-x))) + s
	},

	edit(){
		this.setState({editing: true})
	},

	save(){
		this.props.onChange(this.refs.newText.value, this.props.id)
		this.setState({editing: false})
	},

	remove(){
		this.props.onRemove(this.props.id)
	},

	handleCheck(){

		this.setState({})

	},

	renderForm(){
		return (
			<div className="note" style={this.style}>
				<textarea ref="newText"
						  defaultValue={this.props.children}> 
				</textarea>
				<button onClick={this.save}>Save</button>
			</div>
			)
	},

	renderDisplay(){
		return (
			<div className="note" style={this.style}>
				<p>{this.props.children}</p>

				<span>
					<button onClick={this.edit}>Edit</button>
					<button onClick={this.remove}>Delete</button>
				</span>
			</div>
			)
	},

	render() {
		return (<ReactDraggable>
				{(this.state.editing) ? this.renderForm()
							 : this.renderDisplay()}
				</ReactDraggable>
			)
		}
});
module.exports = Note;