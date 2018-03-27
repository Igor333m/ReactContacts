import React, {Component} from "react";

/*
*	Component that lists our contacts
*/
class ListContacts extends Component {
	render() {
		console.log("Props", this.props)
    return (
      <ol className="contact-list">
      	{this.props.contacts.map(contacts => {
      			return <li>{contacts.name}</li>;
      	})}
      </ol>
    )
  }
}

export default ListContacts;