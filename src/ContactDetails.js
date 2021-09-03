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

    handleCancelClick = (e) => {
        console.log("cancel")
        // change the contact prop that is passed to this component to null, closing the window
        this.props.parentCallback()
    }

    handleSaveClick = (e) => {
        console.log("save")
    }

    handleDeleteClick = (e) => {
        console.log("delete")
    }

    render() {
        console.log(this.props.contact)
        
        let contactFirstName = this.props.contact.firstName;
        let contactLastName = this.props.contact.lastName;
        let contactEmails = this.props.contact.emails;
        let emailList = contactEmails.map(email => (
            <EmailListItem key={email} email={email} parentCallback={this.handleCallback}/>
        ))
        
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emails">
                        Emails
                    </label>
                    <ul>
                        {emailList}
                    </ul>
                </div>
                {/* delete button */}
                <div className="relative">
                    <button onClick={this.handleDeleteClick} className="absolute inset-x-0 left-0 w-2/5 shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Delete
                    </button>
                </div>

                {/* last name input */}
                <div className="relative">
                    <div className="absolute mb-4 inset-x-0 bottom-0">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            Last Name
                        </label>
                        <input value={contactLastName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName"/>
                    </div>    
                </div>                
                <div className="row-span-2"></div>
                
                {/* cancel and save buttons */}
                <div className="relative">
                    <button onClick={this.handleCancelClick} className="absolute left-0 w-2/5 shadow border-2 border-blue-600 hover:border-blue-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                        Cancel
                    </button>
                    <button onClick={this.handleSaveClick} className="absolute right-0 w-2/5 shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Save
                    </button>
                </div>

                <div className="row-span-4"></div>
            </form>
        )
    }
}

export default ContactDetails;