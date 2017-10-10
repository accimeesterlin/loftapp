// Include React
var React = require("react");

var Note = require("./Note");


//class BulletinBoard extends React.Component ({
var BulletinBoard = React.createClass({
 
	// propTypes:{
	// 	count: function(props, propName){
	// 		if (typeof props[propName] !== "number"){
	// 			return new Error("the count must be a number")
	// 		}

	// 		if(props[propName] > 50) {
	// 			return new Error("creating" + props[propName] + " is too large")
	// 		}
	// 	}

	// },

	getInitialState(){
		return {
			notes:[]
		}
	},

	add(text){
		var notes = [
			...this.state.notes,
			{
				id: this.nextId(),
				note: text
			}
		]
		this.setState({notes})
	},

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	},

    update(newText, id) {
        var notes = this.state.notes.map(
            note => (note.id !== id) ?
                 note : 
                        {
                            note, 
                            note: newText
                        }
                    )
                this.setState({notes})
    },

	remove(id) {
		var notes = this.state.notes.filter(note => note.id !== id)
		this.setState({notes})
	},

	eachNote(note){
		return(<Note key={note.id}
					 id={note.id}
					 onChange={this.update}
					 onRemove={this.remove}>
					 {note.note}
				</Note>)
	},

	render(){
		return (
			<div className="bulletinBoard">
				{this.state.notes.map(this.eachNote)}
				<button onClick={() => this.add("New Note")}>+</button>
			</div>
		)
	}


})
module.exports = BulletinBoard;