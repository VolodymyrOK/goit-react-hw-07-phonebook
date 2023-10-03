import { useDispatch, useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import {
  ContactList,
  ContactListItem,
  DelButton,
  HeadContacts,
  MessageAboutEmpty,
  Title,
} from './ContactsList.styled';
import { delContact } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contacts = list.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <HeadContacts>
        <Title>
          Contacts<sup>25</sup>
        </Title>
        <Filter />
      </HeadContacts>
      <ContactList>
        {contacts.length === 0 ? (
          <MessageAboutEmpty>No entries to display</MessageAboutEmpty>
        ) : (
          contacts.map(({ id, name, number }) => (
            <ContactListItem key={id}>
              <span>{name}:</span>
              <span>{number}</span>
              <span>
                <DelButton
                  type="button"
                  onClick={() => {
                    if (window.confirm('Are you sure?'))
                      dispatch(delContact(id));
                  }}
                >
                  Delete
                </DelButton>
              </span>
            </ContactListItem>
          ))
        )}
      </ContactList>
    </>
  );
};
