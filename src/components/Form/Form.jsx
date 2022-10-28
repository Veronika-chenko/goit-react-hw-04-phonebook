import { useState } from 'react';
import { FormWrap, FormButton } from './Form.styled';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  //#1 hangle Inputs Changes
  function handler(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }
  // #2 handle Form Submit
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetForm();
  };
  // #3 add reset Form fn
  function resetForm() {
    setName('');
    setNumber('');
  }

  return (
    <FormWrap onSubmit={handleSubmit}>
      <label htmlFor="text">Name</label>
      <input
        id="text"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handler}
        required
      />
      <label htmlFor="tel">Number</label>
      <input
        id="tel"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handler}
        required
      />
      <FormButton type="submit">Add contact</FormButton>
    </FormWrap>
  );
};
