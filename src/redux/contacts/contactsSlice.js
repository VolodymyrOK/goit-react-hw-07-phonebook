import { createSlice, nanoid } from '@reduxjs/toolkit';

const initState = {
  list: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  reducers: {
    fetchProgress(state) {
      state.isLoading = true;
    },
    fetchAll(state, action) {
      console.log(action);
      state.isLoading = false;
      state.error = null;
      state.list = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addContact: {
      reducer(state, action) {
        state.list = action.payload;
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

export const { fetchProgress, fetchAll, fetchError, addContact, delContact } =
  contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
