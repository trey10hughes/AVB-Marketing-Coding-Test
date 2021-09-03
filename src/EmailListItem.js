import React from "react";

class EmailListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteButton: false,
            email: this.props.email
        };
    }

    onMouseEnter = (e) => {
        this.setState({
            showDeleteButton: true
        });
    }

    onMouseLeave = (e) => {
        this.setState({
            showDeleteButton: false
        });
    }

    handleDeleteClick = (e) => {
        console.log(this.state.email)
        this.props.parentCallback(this.state.email)
    }

    render() {
        let email = this.state.email;
        let deleteButton = null;

        if (this.state.showDeleteButton === true) {
            deleteButton =  <div className="flex-1 bg-red-600 hover:bg-red-400 rounded-full h-7 w-7" onClick={this.handleDeleteClick}>
                                <p className="font-bold text-lg text-white static text-center">-</p>
                            </div>
        } else {
            deleteButton = null;
        }
        return (
            <li key={email} className="inline-flex text-left text-xl px-8 pb-1" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <p className="flex-1 pr-4">{email}</p>
                    {deleteButton}
            </li>
        )
    }
}

export default EmailListItem;