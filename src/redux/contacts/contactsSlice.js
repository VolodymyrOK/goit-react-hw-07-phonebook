import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import data from '../../data/data.json';

const initState = {
  list: data,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  reducers: {
    addContact: {
      reducer({ list }, action) {
        list.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(4),
            name,
            number,
          },
        };
      },
    },

    delContact({ list }, action) {
      const idx = list.findIndex(contact => contact.id === action.payload);
      list.splice(idx, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const { addContact, delContact } = contactSlice.actions;
