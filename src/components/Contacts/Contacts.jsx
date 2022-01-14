import React from 'react';

function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="submit">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
