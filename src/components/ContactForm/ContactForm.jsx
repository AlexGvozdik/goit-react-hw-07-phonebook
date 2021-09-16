import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {addContacts} from 'redux/contacts/contact-operations';
import {getContacts} from 'redux/contacts/contacts-selectors';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const contact = {id: uuidv4(),name,number};
  const saveContacts=contact=>dispatch(addContacts(contact));

  const handleSubmit = e => {
    e.preventDefault();
    
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (findContact) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      saveContacts(contact);
      setName('');
      setNumber('');
    }
    
  };

  return (
    <form  className={s.form} onSubmit={handleSubmit}>
      <label className={s.lable}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={e => setName(e.target.value)}
          required
        />
      </label>

      <label className={s.lable}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>

      <button type="submit" className={s.submitBtn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.PropsType = {
  onSubmit: PropTypes.func.isRequired,
};
