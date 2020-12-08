import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


//AddNewForm
function AddNewForm(props) {
  const [contact, setContact] = useState('');

  const handleChange = (e) => {
    setContact(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    props.addContact(contact);  
  }

return (<div>
  <form onSubmit={handleSubmit} >  
    <input type="text" placeholder="Contact Name" onChange={handleChange} />
    <button type="submit" >Add new contact</button>
  </form>
  </div>);
}

//ContactList
const ShowContactList = (props) => {
  const contactList = props.contacts.map((contact, index) => 
     <li key={index} >{contact}</li>
  );
  return(<ul>{ contactList} </ul>);
}

// Contact Manager
function ContactManager(props) {

const [contacts, setContacts] = useState(["abc", "def"]);

const addContact = (name) => {
  setContacts([...contacts, name]);
}
console.log("Contact: ", contacts);

return (<div>
  <h1>Contact Manager</h1>
  <AddNewForm addContact={ addContact } />
  <ShowContactList contacts={contacts} />
</div>)

}

// Adding Code for Counter
let counter = 0;
function Counter () {
  counter++;  
  ReactDOM.render(<h4>counter: {counter} </h4>, document.getElementById('counter'));
}

export default function App() {
  return (
    <div className="App">
      <div id="counter"  />
      <ContactManager />
    </div>
  );
}

setInterval(Counter, 1000);
