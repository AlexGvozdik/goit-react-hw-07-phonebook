// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import*as contactsActions from './contacts-actions';

// const contacts = createReducer([], {
//   [contactsActions.fetchContactsSuccess]:(_,{payload})=>payload,
//   [contactsActions.addContactsSuccess]: (state, { payload }) => [payload, ...state],
//   [contactsActions.deleteContactsSuccess]: (state, { payload }) =>
//     state.filter(({id})=> id !== payload),
// });

// const filter = createReducer('', {
//   [contactsActions.changeFilter]: (_, { payload }) => payload,
// });

// const rootReducer = combineReducers({
//   contacts,
//   filter,
// });
// export default rootReducer;


