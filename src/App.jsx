import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.styled.jsx';
import PhonebookForm from './components/PhonebookForm';
import Contacts from './components/Contacts';
import Title from './components/Title';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
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

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    console.log(filteredContacts);

    return (
      <>
        <Title title="Phonebook" />
        <PhonebookForm onSubmit={this.addContact} />
        <Title title="Contacts" />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={filteredContacts} />
      </>
    );
  }
}

export default App;
