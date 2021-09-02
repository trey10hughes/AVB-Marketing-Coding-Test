import React from "react";

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            contacts: [],
            error: null
        };
    }

    componentDidMount() {
        // get all contacts from api
        fetch("https://avb-contacts-api.herokuapp.com/contacts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        contacts: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    handleContactClick = (e) => {
        console.log(e.target.id);
        fetch("https://avb-contacts-api.herokuapp.com/contacts/" + e.target.id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.props.parentCallback(result)
                },
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    }

    render () {
        const { isLoaded, contacts, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
              return (
                <ul className="bg-red-100">
                {contacts.map(contact => (
                  <li key={contact.id} id={contact.id} onClick={this.handleContactClick} className="hover:bg-blue-400 text-left">
                    {contact.firstName} {contact.lastName}
                  </li>
                ))}
              </ul>
              );
          }
    }
}

export default ContactList;