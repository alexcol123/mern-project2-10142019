import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = props => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  console.log(filtered);

  if (contacts.length === 0) {
    return (
      <h4 className="text-primary my-2" style={{ textAlign: 'center' }}>
        There are no contacts to show...
      </h4>
    );
  }

  return (
    <Fragment>
      {/* {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))} */}

      {filtered != null
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
