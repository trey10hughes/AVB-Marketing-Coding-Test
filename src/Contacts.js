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

    render () {
        let addContact = this.state.addContact;
        let contactForm = null;
        let toggleButton =  <button
                                className="addContact bg-blue-600 hover:bg-blue-400 rounded-full h-10 w-10 static" 
                                onClick={this.handleToggleClick}>
                                    <p className="text-4xl text-white static">+</p>
                            </button>

        if (addContact === true) {
            contactForm = <AddContactForm/>;
            
            toggleButton =  <button
                                className="addContact bg-red-600 hover:bg-red-400 rounded-full h-10 w-10 static" 
                                onClick={this.handleToggleClick}>
                                    <p className="text-4xl text-white static">-</p>
                            </button>
        }
        return (
            <div className="grid gap-2 grid-cols-1 static contactsDiv">
                
                {/* Title of section and Add Contact Button */}
                <div className= "grid gap-2 grid-cols-1 static static flex items-center">
                    <div className="object-left col-span-2 col-start-1 static flex items-left px-8">
                        <p className="text-4xl static ">Contacts</p>
                        <div className="pl-8">
                            {toggleButton}
                        </div>
                        
                    </div>
                    {/* <div className="object-right col-span-1 col-start-3 static flex items-left">
                        
                    </div> */}
                </div>

                {/* Input form to add new contact */}
                    {contactForm}
                
                {/* figure out how to get this to render without moving the above portion up */}
                
                <div className="overflow-y-scroll">
                    <ContactList parentCallback={this.handleCallback} contactSelected={this.props.contactSelected}/>
                </div>
                
            </div>
        );
    }
}

export default Contacts;