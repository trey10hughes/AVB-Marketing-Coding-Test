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

            <div className="flex grid gap-2 grid-cols-4 grid-rows-4 grid-flow-col contactsDiv">
                <div className="row-span-4"></div>

                {/* first name input */}
                <div className="bg-blue-100">
                    <form className="w-full max-w-sm grid grid-cols-1 static px-4">
                        <div className="md:flex md:items-center mb-6">
                            <div className="">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-first-name">
                                    First Name
                                </label>
                            </div>
                            <div className="">
                                <input name="firstName" onChange={this.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text"></input>
                            </div>
                        </div>
                    </form>
                </div>
                {/* email list */}
                <div className="bg-blue-100 row-span-2">{contactFirstName}</div>
                {/* delete button */}
                <div className="bg-blue-100">{contactFirstName}</div>

                {/* last name input */}
                <div className="bg-blue-100">{contactFirstName}</div>                
                <div className="bg-blue-100 row-span-2">{contactFirstName}</div>
                {/* cancel and delete buttons */}
                <div className="bg-blue-100">{contactFirstName}</div>

                <div className="row-span-4"></div>
            </div>
        )
    }
}

export default ContactDetails;