import React, { Component } from 'react'
import ListContacts from "./ListContacts"
import CreateContact from "./CreateContact"
import * as ContactsAPI from "./utils/ContactsAPI"

class App extends Component {
	state = {
		//List or create define what to render
		screen: "list",
		contacts: []
	}

	componentDidMount() {
		ContactsAPI.getAll().then((contacts) => {
			this.setState({ contacts })
		})
	}

	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((c) => c.id !== contact.id)
		}))

		ContactsAPI.remove(contact)
	}
	render(){
		return(
			<div>
				{this.state.screen === "list" && (
					<ListContacts
		  		// Passing a list of contacts prop into ListContacts component
		  		contacts={this.state.contacts}
		  		onDeleteContact={this.removeContact}/>
				)}
		  	{this.state.screen === "create" && (
		  		<CreateContact />
		  	)}
		  </div>
		)
	}
	
}

export default App
