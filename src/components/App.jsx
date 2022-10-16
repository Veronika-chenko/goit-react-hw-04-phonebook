import { Component } from "react";
// import { nanoid } from 'nanoid';
import shortid from 'shortid';
import { Form } from './Form/Form';
import { ContactList } from './Contacts/Contacts'


export class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  formSubmitHandler = data => {
    setTimeout(() => {
      // console.log(data)
    }, 1000)
  }

  addTodo = (userNeme, userTel) => {
    //create and add contact to state.contacts:
    const todo = {
      id: shortid.generate(),
      name: userNeme,
      number: userTel,
    };
    // update/add into array:
    this.setState(prevState => ({
      contacts: [todo, ...prevState.contacts]
    }))
  }

  render() {
    const { contacts} = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        {/* <Form onSubmit={this.formSubmitHandler} addTodo={this.addTodo} /> */}
        <Form onSubmit={this.addTodo} />
        
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input type="text" />
        <ContactList contacts={contacts} />
      </>
    )
  }
};
