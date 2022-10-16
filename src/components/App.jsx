import { Component } from "react";
// import { nanoid } from 'nanoid';
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  }

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value })   
  }

  handleSubmit = evt => {
    evt.preventDefault();
    // прочитати name:
    this.addTodo(this.state.name)
  }

  addTodo = inputText => {
    // console.log(inputText)
    //create contact and add to state.contacts:
    const todo = {
      id: shortid.generate(),
      name: inputText,
    };

    // update/add into array:
    this.setState(prevState => ({
      contacts: [todo, ...prevState.contacts]
    }))
  }

  resetForm() {
    this.state.contacts = '';
    this.state.name = '';
  }
  

  render() {
    const { contacts} = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text" style={{display: "block", marginBottom: "12px"}}>Name</label>
          <input
              id="text"
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
          <button type="submit">Add contact</button>
        </form>
        
        <h2>Contacts</h2>
        <ul prop={contacts}>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>
    )
  }
};
