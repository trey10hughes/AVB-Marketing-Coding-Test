import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        AVB Coding Test: Trey Hughes
      </header>
      <div class="main-grid inline-grid grid-cols-4 gap-4">
        <div className="contacts object-left col-span-1 col-start-1">
          {/* this is the div that will hold the list of contacts & the button to add a new one */}
          contacts
        </div>
        <div className="contactDetails object-right col-span-3 col-start-2">
          {/* this is the div that will hold more info about a selected contact */}
          {/* this will allow customers to add and delete emails from a contact */}
          contact details
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
