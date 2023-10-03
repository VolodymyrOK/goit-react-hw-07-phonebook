import axios from 'axios';
import {
  fetchProgress,
  fetchAll,
  fetchError,
  addContact,
} from 'redux/contacts/contactsSlice';

axios.defaults.baseURL = 'https://651afec8340309952f0e22ec.mockapi.io/api/v1/';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchAll(response.data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const addContactsToBase = values => async dispatch => {
  try {
    dispatch(fetchProgress());
    const response = await axios.post('/contacts');
    console.log(response);
    dispatch(addContact(response.data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
