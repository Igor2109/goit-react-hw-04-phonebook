import css from './ContactForm.module.css';
import React, {useState } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = ({handleAddContact}) => {
// const [name, setName] = useState('');
// const [number, setNumber] = useState('');
const [data, setData] = useState({ name: "", number: "" })
  const {name, number} = data


  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setData(prev=>({...prev, [name]: value}))


  // if (e.target.name === 'name') {
  //   setName(e.target.value);
  // } else if (e.target.name === 'number') {
  //   setNumber(e.target.value);
  // }
};
const handleSubmit = e => {
  e.preventDefault();
  const userContacts = {
    id: nanoid(),
    name: name,
    number: number,
  };

  handleAddContact(userContacts);
  setData({ name: '', number: '' });
  // setName('');
  // setNumber('');
};

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            name="name"
            placeholder="Name"
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
