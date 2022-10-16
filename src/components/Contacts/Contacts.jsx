import PropTypes from 'prop-types';
import { ContactItem, ContactDeleteBitton } from './Contacts.styled';

export const ContactList = ({ contacts, onDeleteContact}) => {
    return (
        <ul>
          {contacts.map(({id, name, number}) => (
              <ContactItem key={id}>{name}: {number}
              <ContactDeleteBitton style={{ marginLeft: "8px" }} onClick={() => onDeleteContact(id)}>
                Delete
              </ContactDeleteBitton>
            </ContactItem>
          ))}
        </ul>
    )
}

ContactList.prototype = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })),
}