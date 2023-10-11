import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from '../components/App.module.css';
import { useEffect } from 'react';
const init = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? init
  );
  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = userContacts => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === userContacts.name.toLowerCase() || contact.number === userContacts.number
      )
    ) {
      alert(`${userContacts.name} or ${userContacts.number} is already in contacts`);
      return;
    }
    setContacts(prevState => [userContacts, ...prevState]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getContactFromFilter = () => {
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };

  const handleDelete = contactId => {
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactsList
        contacts={getContactFromFilter()}
        handleDelete={handleDelete}
      />
    </div>
  );
};
