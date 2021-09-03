import './App.css';
import React from 'react';
import Contacts from './Contacts';
import ContactDetails from './ContactDetails';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contactSelected: null
    };
  }

  handleCallback = (childData) => {
    console.log('app')
    console.log(childData)
    this.setState({
      contactSelected: childData
    })
    console.log(this.state)
  }

  handleClearCallback = () => {
    this.setState({
      contactSelected: null
    });
  }

  render() {
    let contactSelected = this.state.contactSelected;
    let contactDetails = null;
    if (contactSelected !== null) {
      contactDetails = <ContactDetails parentCallback={this.handleClearCallback}></ContactDetails>
    }
    return (
      <div className="App">
        <header className="App-header bg-blue-600 shadow-lg border-b-2">
          AVB Coding Test: Trey Hughes
        </header>
        <div className="main-grid inline-grid grid-cols-5 gap-4">
          <div className="contacts object-left col-span-1 col-start-1 shadow-2xl border-r-2">
            {/* this is the div that will hold the list of contacts & the button to add a new one */}
            <Contacts parentCallback={this.handleCallback}></Contacts>
          </div>
          <div className="contactDetails object-right col-span-4 col-start-2">
            {/* this is the div that will hold more info about a selected contact */}
            {/* this will allow customers to add and delete emails from a contact */}
            {contactDetails}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
