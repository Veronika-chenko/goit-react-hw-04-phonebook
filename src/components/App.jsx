import { Component } from 'react';
import shortid from 'shortid';
import { Form } from './Form/Form';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { TopTitle, Title } from './App.styled';

const CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(CONTACTS));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem(CONTACTS, JSON.stringify(this.state.contacts));
    }
  }

  addContact = (contactName, contactTel) => {
    const { contacts } = this.state;
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
    // update/add into array:
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <TopTitle>Phonebook</TopTitle>
        <Form onSubmit={this.addContact} contacts={contacts} />

        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
