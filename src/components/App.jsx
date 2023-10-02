import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <Layout>
      <ContactsEntry />
      <ContactsList />
      <GlobalStyle />
    </Layout>
  );
};
