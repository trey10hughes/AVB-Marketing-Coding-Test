import React from "react";
import ContactList from "./ContactList";
import AddContactForm from "./AddContactForm";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //used to control whether the add contact form is viewable or not. Default false
            addContact: false
        };
    }

    handleCallback = (childData) => {
        console.log(childData)
        this.props.parentCallback(childData)
    }

    handleToggleClick = (e) => {
        console.log("toggle add contact")

        if (this.state.addContact === false) {
            this.setState({
                addContact: true
            })
        } else {
            this.setState({
                addContact: false
            })
        }
        
    }

    handleSubmitClick = (e) => {
        console.log("adding new contact from form")
        fetch("https://avb-contacts-api.herokuapp.com/contacts", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: {
                // hardcoded placeholder for now, will fill out with values from input
                "firstName": "test",
                "lastName": "test",
                "emails": [
                    "test@mail.com"
                ]

            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    render () {
        let addContact = this.state.addContact;
        let contactForm = null;
        let toggleButton =  <button
                                className="addContact bg-blue-400 hover:bg-blue-600 rounded-full h-10 w-10 static" 
                                onClick={this.handleToggleClick}>
                                    <p className="text-4xl text-white static">+</p>
                            </button>

        if (addContact === true) {
            contactForm = <AddContactForm/>;
            
            toggleButton =  <button
                                className="addContact bg-red-400 hover:bg-red-600 rounded-full h-10 w-10 static" 
                                onClick={this.handleToggleClick}>
                                    <p className="text-4xl text-white static">-</p>
                            </button>
        }
        return (
            <div className="grid gap-4 grid-cols-1 static bg-blue-200 contactsDiv">
                
                {/* Title of section and Add Contact Button */}
                <div className= "grid gap-2 grid-cols-3 static static bg-green-100">
                    <div className="object-left col-span-2 col-start-1 static">
                        <p className="text-4xl static ">Contacts</p>
                    </div>
                    <div className="object-right col-span-1 col-start-3 static">
                        {toggleButton}
                    </div>
                </div>

                {/* Input form to add new contact */}
                {contactForm}
                {/* figure out how to get this to render without moving the above portion up */}
                
                <div className="overflow-y-scroll">
                    <ContactList parentCallback={this.handleCallback}/>
                </div>
                
            </div>
        );
    }
}

export default Contacts;