import { useState } from "react";
import { nanoid } from "nanoid";
import { addCommaAfterSecondToLastWord, sortContactsByName } from '../helper';
import ContactItem from '../components/contact components/ContactItem';

const useContact = () => {
  const [search, setSearch] = useState('');
  const [shown, setShown] = useState(false);
  
  const toggleShown = () => setShown(prev => !prev);  
  const handleChange = ({ target: { value } }) => setSearch(value);
   
  const filterContacts = (contacts, searchTerm) => {
    if (!searchTerm) {
      return contacts;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return contacts.filter(({ name, tel, email, postcode, address }) => {
      const lowercasedName = name.toLowerCase();
      const lowercasedTel = tel.toLowerCase();
      const lowercasedEmail = (email||"").toLowerCase()
      
      const lowercasedPostcode = (postcode || '').toLowerCase();
      const lowercasedAddress = (address || '').toLowerCase();
  
      return (
        lowercasedName.includes(lowercasedSearchTerm) ||
        lowercasedTel.includes(lowercasedSearchTerm) ||
        lowercasedEmail.includes(lowercasedSearchTerm) ||
        lowercasedPostcode.includes(lowercasedSearchTerm) ||
        lowercasedAddress.includes(lowercasedSearchTerm)
      );
    });
  };
  
  const renderContacts = (contacts) => {
    return sortContactsByName(contacts).map(({ name, tel, email, address, postcode }) => {
      let finalAddress = address;
  
      if (address) {
        const addressWords = address.split(',');
        if (addressWords.length > 1) {
          finalAddress = addCommaAfterSecondToLastWord(addressWords.join(' '));
        }
      }
  
      return (
        <ContactItem
          key={nanoid()}
          name={name}
          tel={tel}
          email={email? email.toLowerCase():null}
          address={finalAddress || null}
          postcode={postcode || null}
        />
      );
    });
  };
  

  return {
    renderContacts,
    filterContacts,
    search,
    shown,
    toggleShown,
    handleChange
  };
}

export default useContact;
