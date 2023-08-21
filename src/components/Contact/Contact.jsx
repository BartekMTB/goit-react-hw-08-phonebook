import PropTypes from 'prop-types';
import css from './contact.module.css';
import { deleteContact, editContact } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import {
  selectEditContact,
  selectContactId,
} from '../../redux/contacts/selectors';

import { useDispatch } from 'react-redux';

export const Contact = ({ id, name, number }) => {
  const SelectedContacts = useSelector(selectEditContact);
  const SelectId = useSelector(selectContactId);
  const dispatch = useDispatch();
  const handleSelectedId = id => {
    console.log(id);
    console.log(SelectedContacts);
    console.log(SelectId);
    dispatch(editContact(id));
  };

  return (
    <li className={css.contactsItem}>
      {name} {number}{' '}
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        remove
      </button>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => handleSelectedId(id)}
      >
        edit
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
