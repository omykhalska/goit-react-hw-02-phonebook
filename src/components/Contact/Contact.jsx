import React from 'react';
import Button from '../Button';
import { ContactItem } from './Contact.styled';

function Contact({ id, name, number, onDeleteContact }) {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <Button
        label="Delete"
        type="submit"
        onClick={() => onDeleteContact(id)}
      />
    </ContactItem>
  );
}

export default Contact;
