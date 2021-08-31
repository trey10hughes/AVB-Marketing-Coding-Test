import React from "react";
import ContactList from "./ContactList";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleCallback = (childData) => {
        console.log(childData)
        this.props.parentCallback(childData)
    }

    handleAddClick() {
        console.log("add contact")
    }

    handleSubmitClick() {
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
        
        return (
            <div className="grid gap-4 grid-cols-1" >
                
                {/* Title of section and Add Contact Button */}
                <div className= "grid gap-2 grid-cols-3">
                    <div className="object-left col-span-2 col-start-1">
                        <p className="text-4xl">Contacts</p>
                    </div>
                    <div className="object-right col-span-1 col-start-3">
                        <button
                            className="addContact bg-blue-400 hover:bg-blue-600 rounded-full h-10 w-10 items-center justify-center text-4xl text-white" 
                            onClick={this.handleAddClick}>
                                +
                        </button>
                    </div>
                </div>

                {/* Input form to add new contact */}
                
                <ContactList parentCallback={this.handleCallback}/>
            </div>
        );
    }
}

export default Contacts;