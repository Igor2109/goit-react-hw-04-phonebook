import css from './ContactForm.module.css';
import React, {useState } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = ({handleAddContact}) => {
  // state = {
  //   name: '',
  //   number: '',
  // };
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const handleInputChange = e => {
  if (e.target.name === 'name') {
    setName(e.target.value);
  } else if (e.target.name === 'number') {
    setNumber(e.target.value);
  }
};
const handleSubmit = e => {
  e.preventDefault();
  const userContacts = {
    id: nanoid(),
    name: name,
    number: number,
  };

  handleAddContact(userContacts);

  setName('');
  setNumber('');
};

localStorage.clear();
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            name="name"
            placeholder="Name"
            //  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.formInput}
          />
        </label>
        <label>
          
          <input
            type="tel"
            value={number}
            onChange={handleInputChange}
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.formInput}
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
