import * as contactsActions from './contacts-actions';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContacts =
  ({ id, name, number }) =>
  async dispatch => {
    const contact = {
      id,
      name,
      number,
    };
    dispatch(contactsActions.addContactsRequest());
    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(contactsActions.addContactsSuccess(data));
    } catch (error) {
      dispatch(contactsActions.addContactsError(error));
    }
  };

export const deleteContacts = id => async dispatch => {
  dispatch(contactsActions.deleteContactsRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(contactsActions.deleteContactsSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactsError(error));
  }
};


