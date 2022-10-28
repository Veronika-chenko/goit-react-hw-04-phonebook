import { useState } from 'react';
import shortid from 'shortid';
import contactsData from 'contacts.json';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Form } from './Form/Form';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { TopTitle, Title } from './App.styled';

const CONTACTS = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(CONTACTS, contactsData);
  const [filter, setFilter] = useState('');

  const addContact = (contactName, contactTel) => {
    const newContact = {
      id: shortid.generate(),
      name: contactName,
      number: contactTel,
    };

    for (const contact of contacts) {
      if (contact.name === newContact.name) {
        alert(`${newContact.name} is already in contacts.`);
        return;
      }
    }

    setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <>
      <TopTitle>Phonebook</TopTitle>
      <Form onSubmit={addContact} contacts={contacts} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
};
