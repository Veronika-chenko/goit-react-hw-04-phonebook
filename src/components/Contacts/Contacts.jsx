import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact}) => {
    return (
        <ul>
          {contacts.map(({id, name, number}) => (
              <li key={id}>{name}: {number}
                  <button style={{ marginLeft: "8px" }} onClick={() => onDeleteContact(id)}>Delete</button></li>
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