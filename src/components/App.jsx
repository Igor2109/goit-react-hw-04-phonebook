import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from '../components/App.module.css';
import { useEffect } from 'react';
export const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // componentDidMount();
  // {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts) {
  //     this.setState({ contacts: JSON.parse(savedContacts) });
  //   }
  // }


  useEffect(() =>   {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts( JSON.parse(savedContacts) );
    }
  }
, []);


  // componentDidUpdate(_, prevState);
  // {
  //   if (this.state.contacts.length !== prevState.contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  
}, [contacts]);


  const handleAddContact = userContacts => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === userContacts.name.toLowerCase()
      )
    ) {
      alert(`${userContacts.name} is already in contacts`);
      return;
    }
    setContacts([userContacts, ...contacts]);  };

  const handleFilterChange = e => {
    setFilter(e.target.value);  };

  const getContactFromFilter = () => {
    // const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };
  const handleDelete = contactId => {
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== contactId)
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <ContactsList
        contacts={getContactFromFilter()}
        handleDelete={handleDelete}
      />
    </div>
  );
};
