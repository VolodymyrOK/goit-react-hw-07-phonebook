import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { list, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ContactsEntry />
      {list.length > 0 && <ContactsList />}
      <GlobalStyle />
    </Layout>
  );
};
