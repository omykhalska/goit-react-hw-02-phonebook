import React from 'react';
import Contact from '../Contact';
import { ContactList } from './ContactsList.styled';

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ContactList>
      {contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ContactList>
  );
}

export default ContactsList;
