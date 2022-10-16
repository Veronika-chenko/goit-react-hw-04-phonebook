import { Component } from "react";
// import { nanoid } from 'nanoid';
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value })   
  }

  handleSubmit = evt => {
    evt.preventDefault();
    // прочитати name:
    this.addTodo(this.state.name, this.state.number);
    this.resetForm()
  }

  addTodo = (userNeme, userTel) => {
    // console.log(inputText)
    //create contact and add to state.contacts:
    const todo = {
      id: shortid.generate(),
      contact: {name: userNeme, number: userTel},
      // name: inputText,
    };

    // update/add into array:
    this.setState(prevState => ({
      contacts: [todo, ...prevState.contacts]
    }))
  }

  resetForm = () => {
    this.setState({ name: '', number: '' });
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
              onChange={this.handleInputChange}  
              required  
          />
          <label htmlFor="tel" style={{display: "block", marginBottom: "12px"}}>Number</label>
          <input
            id="tel"
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleInputChange} 
            required
          />
          <button type="submit">Add contact</button>
        </form>
        
        <h2>Contacts</h2>
        <ul prop={contacts}>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.contact.name}: {contact.contact.number}</li>
          ))}
        </ul>
      </>
    )
  }
};
