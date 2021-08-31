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
            <div>
                {contactFirstName}
            </div>
        )
    }
}

export default ContactDetails;