import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdContactPhone } from 'react-icons/md';
import {getFilterContacts} from 'redux/contacts/contacts-selectors';
import {fetchContacts, deleteContacts} from'redux/contacts/contact-operations';
import s from './ContactList.module.css';

 export default function ContactList() {
  const contacts=useSelector( getFilterContacts);
  const dispatch=useDispatch();
  const onDeleteClick=(id)=>dispatch(deleteContacts(id));
  useEffect(()=>dispatch(fetchContacts()),[dispatch]);
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact}>
            <MdContactPhone className={s.icon} />
            <p>
              {name}: {number}
            </p>
            <button
              className={s.buttonDelete}
              type="button"
              onClick={()=>onDeleteClick(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteClick: PropTypes.func,
};

