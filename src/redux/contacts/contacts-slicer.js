import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) =>
      (state.contacts = payload),
    [addContacts.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContacts.fulfilled]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, { payload }) => payload,
  },
});

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export default rootReducer;
