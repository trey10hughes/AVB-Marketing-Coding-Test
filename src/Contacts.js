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
            <div className="grid gap-4 grid-cols-1 grid-rows-12 static bg-blue-200 contactsDiv">
                
                {/* Title of section and Add Contact Button */}
                <div className= "grid gap-2 grid-cols-3 static row-start-1 static">
                    <div className="object-left col-span-2 col-start-1 static">
                        <p className="text-4xl static ">Contacts</p>
                    </div>
                    <div className="object-right col-span-1 col-start-3 static">
                        <button
                            className="addContact bg-blue-400 hover:bg-blue-600 rounded-full h-10 w-10 static" 
                            onClick={this.handleAddClick}>
                                <p className="text-4xl text-white static">+</p>
                        </button>
                    </div>
                </div>

                {/* Input form to add new contact */}
                
                {/* figure out how to get this to render without moving the above portion up */}

                <form className="w-full max-w-sm grid grid-cols-1 static">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-first-name">
                                First Name
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text"></input>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-last-name">
                                Last Name
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text"></input>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email">
                                Email
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text"></input>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                        <button class="shadow bg-blue-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Add Contact
                        </button>
                        </div>
                    </div>
                </form>
                
                <div className="overflow-y-scroll">
                    <ContactList parentCallback={this.handleCallback}/>
                </div>
                
            </div>
        );
    }
}

export default Contacts;