import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.styled.jsx';
import PhonebookForm from './components/PhonebookForm';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <>
        <PhonebookForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
