import React from 'react';
import EmailListItem from "./EmailListItem";

class ContactDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.contact.id,
            firstName: this.props.contact.firstName,
            lastName: this.props.contact.lastName,
            emails: this.props.contact.emails,
            showAddEmail: false,
            addedEmail: ""
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.contact.id !== prevProps.contact.id) {
          this.setState({
            id: this.props.contact.id,
            firstName: this.props.contact.firstName,
            lastName: this.props.contact.lastName,
            emails: this.props.contact.emails
          });
        }
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
        console.log(this.state)
        let id = this.state.id
        let url = "https://avb-contacts-api.herokuapp.com/contacts/" + id.toString()
        fetch(url, {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                // hardcoded placeholder for now, will fill out with values from input
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                emails : this.state.emails
            })
        })
        this.props.parentCallback()
    }

    handleDeleteClick = (e) => {
        console.log("delete")
    }

    handleAddEmailToggle = (e) => {
        this.setState({
            showAddEmail: true
        })
    }

    handleAddEmail = (e) => {
        console.log("add email")
        console.log(this.state.addedEmail)

        let emails = this.state.emails;
        emails.push(this.state.addedEmail);
        console.log(emails)
        this.setState({
            emails
        })
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleCancelAddContactClick = (e) => {
        this.setState({
            showAddEmail: false
        })
    }

    render() {
        console.log('details')
        console.log(this.props.contact)
        let addedEmail = this.props.contact.addedEmail;
        let contactFirstName = this.props.contact.firstName;
        let contactLastName = this.props.contact.lastName;
        let contactEmails = this.props.contact.emails;

        let firstName = this.state.firstName
        let lastName = this.state.lastName

        let emailList = contactEmails.map(email => (
            <EmailListItem key={email} email={email} parentCallback={this.handleCallback}/>
        ))

        let addEmailForm =  <li className="grid grid-cols-5 inline-flex text-left text-xl px-8 pb-1">
                                <div className="flex-1 col-start-2 col-end-3 bg-blue-600 hover:bg-blue-400 rounded-full h-8 w-8" onClick={this.handleAddEmailToggle}>
                                    <p className="font-bold text-lg text-white static text-center">+</p>
                                </div>
                                <p className="col-start-3 col-end-5 flex-1 pr-4 text-blue-600">Add Email</p>
                            </li>
        
        if (this.state.showAddEmail === true) {
            addEmailForm =  <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAdd">
                                    Email
                                </label>
                                <input value={addedEmail} onChange={this.handleChange} name="addedEmail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="addedEmail"/>
                                <button onClick={this.handleAddEmail} className="shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Add Email
                                </button>
                                <button onClick={this.handleCancelAddContactClick} className="shadow border-2 border-blue-600 hover:border-blue-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                                    Cancel
                                </button>
                            </div>
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
                            <input onChange={this.handleChange} value={firstName} name="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName"/>
                        </div>
                </div>
                {/* email list */}
                <div className="row-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emails">
                        Emails
                    </label>
                    <ul>
                        {emailList}
                        {addEmailForm}
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
                        <input onChange={this.handleChange} value={lastName} name="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName"/>
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