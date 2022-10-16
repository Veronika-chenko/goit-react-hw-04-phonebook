import { Component } from 'react';
import { FormWrap, FormButton } from './Form.styled';


export class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({ [name]: value })   
    }

    handleSubmit = evt => {
        evt.preventDefault();
        // read name:
        this.props.onSubmit(this.state.name, this.state.number);
        this.resetForm(this.contacts)
    }

    resetForm = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        return (
            <FormWrap onSubmit={this.handleSubmit}>
                <label htmlFor="text">Name</label>
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
                <label htmlFor="tel">Number</label>
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
                <FormButton type="submit">Add contact</FormButton>
            </FormWrap>
        )
    }
}