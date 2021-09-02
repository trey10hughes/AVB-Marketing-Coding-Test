import React from 'react';

class AddContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        };
    }

    //handles changing the state to match what is input in the text fields.
    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleAddContactClick = (e) => {
        console.log(this.state)
        fetch("https://avb-contacts-api.herokuapp.com/contacts", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                // hardcoded placeholder for now, will fill out with values from input
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                emails : [
                    this.state.email
                ]
            })
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

    render() {

        return (
            <form className="w-full max-w-sm grid grid-cols-1 static px-4">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-first-name">
                                First Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name="firstName" onChange={this.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text"></input>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-last-name">
                                Last Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name="lastName" onChange={this.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text"></input>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name="email" onChange={this.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text"></input>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                        <button onClick={this.handleAddContactClick} className="shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Add Contact
                        </button>
                        </div>
                    </div>
                </form>
        );
    }
}

export default AddContactForm;