
import ListItem from 'components/ListItem/ListItem';
import PropTypes from 'prop-types';

import { List } from './ContactList.styled';

const ContactList = ({ contacts, onClick }) => {
     return (
     <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onClick={onClick}
            
          />
        );
      })}
    </List>
)};

export default ContactList;


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({ 
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onClick: PropTypes.func,
    
}