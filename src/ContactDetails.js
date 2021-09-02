import React from 'react';

class ContactDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {

        console.log(this.props.contact)
        
        let contactFirstName = null;

        if(this.props.contact) {
            contactFirstName = <p>{this.props.contact.firstName}</p>
        } else {
            contactFirstName = <p>nothin</p>
        }
        
        return(
            // requirements:
            // display first name and last name of contact in input boxes at the top
            // display list of emails underneath first name input box
            // when hovering an email in the list, a delete button will appear
            // an add email button appears at the bottom of the list
            // delete button at the bottom left
            // cancel and save buttons at the bottom right

            // develop the UI first, then go back and add the functionality to edit and delete

            <div className="flex grid gap-2 grid-cols-4 grid-rows-4 contactsDiv">
                <div className="bg-blue-100">{contactFirstName}</div>
                <div className="bg-blue-200">{contactFirstName}</div>
                <div className="bg-blue-100">{contactFirstName}</div>
                <div className="bg-blue-200">{contactFirstName}</div>
                <div className="bg-blue-100">{contactFirstName}</div>
                <div className="bg-blue-200">{contactFirstName}</div>
                <div className="bg-blue-100">{contactFirstName}</div>
                <div className="bg-blue-200">{contactFirstName}</div>
                <div className="bg-blue-100">{contactFirstName}</div>
                <div className="bg-blue-200">{contactFirstName}</div>
                <div className="bg-blue-100">{contactFirstName}</div>
                <div className="bg-blue-200">{contactFirstName}</div>
                <div className="bg-blue-100">{contactFirstName}</div>
                <div className="bg-blue-200">{contactFirstName}</div>
                <div className="bg-blue-100">{contactFirstName}</div>
                <div className="bg-blue-200">{contactFirstName}</div>
            </div>
        )
    }
}

export default ContactDetails;