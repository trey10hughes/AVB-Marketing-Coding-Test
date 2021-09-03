import React from 'react';
import EmailListItem from "./EmailListItem";

class ContactDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            //meant to hold all of the original values in case the user cancels their edits
            originalFirstName: "",
            originalLastName: "",
            originalEmails: [],
            
            firstName: "",
            lastName: "",
            emails: []
        };
    }

    handleCallback = (childData) => {
        console.log(childData);
        //remove the email in childData from the emails array
        let emails = this.props.contact.emails
        let index = emails.indexOf(childData)
        if(index >= 0) {
            emails.splice(index, 1)
        }
        console.log(emails)
        this.setState({
            emails
        });
    }

    render() {

        console.log(this.props.contact)
        
        let contactFirstName = null;
        let contactLastName = null;
        let contactEmails = null;
        let emailList = null;

        if(this.props.contact) {
            contactFirstName = this.props.contact.firstName;
            contactLastName = this.props.contact.lastName;
            contactEmails = this.props.contact.emails;
            emailList = contactEmails.map(email => (
                <EmailListItem email={email} parentCallback={this.handleCallback}/>
            ))
        } else {
            contactFirstName = null
            contactLastName = null;
            contactEmails = null;

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

            <form className="flex grid gap-2 grid-cols-4 grid-rows-4 grid-flow-col contactsDiv">
                <div className="row-span-4"></div>

                {/* first name input */}
                
                <div className="relative">
                        <div className="absolute mb-4 inset-x-0 bottom-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input value={contactFirstName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName"/>
                        </div>
                </div>
                {/* email list */}
                <div className="row-span-2">
                    <ul>
                        {emailList}
                    </ul>
                </div>
                {/* delete button */}
                <div className="bg-blue-100">{contactFirstName}</div>

                {/* last name input */}
                <div className="relative">
                    <div className="absolute mb-4 inset-x-0 bottom-0 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            Last Name
                        </label>
                        <input value={contactLastName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName"/>
                    </div>    
                </div>                
                <div className="bg-blue-100 row-span-2">{contactFirstName}</div>
                {/* cancel and delete buttons */}
                
                <div className="bg-blue-100">{contactFirstName}</div>

                <div className="row-span-4"></div>
            </form>
        )
    }
}

export default ContactDetails;