import React from "react";

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            contacts: [],
            error: null,
            selected: null
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
        let id = e.target.id

        this.setState({
            selected: id
        }, () => {
            console.log(this.state)
        })
        
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
        const { isLoaded, contacts, error, selected } = this.state
        console.log(selected)

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
              return (
                <ul>
                {contacts.map(contact => (
                  <li key={contact.id} id={contact.id} onClick={this.handleContactClick} className={(selected == contact.id ? "bg-blue-600 text-left text-xl px-8 text-white" : "hover:bg-blue-600 hover:text-white text-left text-xl px-8")}>
                      {contact.firstName} {contact.lastName}
                  </li>
                ))}
              </ul>
              );
          }
    }
}

export default ContactList;