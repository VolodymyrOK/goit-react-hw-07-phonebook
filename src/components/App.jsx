import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations/operations';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const list = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      {isLoading && !error && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ContactsEntry />
      {list.length > 0 && <ContactsList />}
      <GlobalStyle />
    </Layout>
  );
};
