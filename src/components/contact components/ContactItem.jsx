import React, { useState } from 'react';


import ContactItemProperty from './ContactItemProperty';



const ContactItem = ({ name, email, tel, address=null,postcode=null }) => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isTelCopied, setIsTelCopied] = useState(false);

  const copyItem = async (item, setIsCopied) => {
    await navigator.clipboard.writeText(item);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const copyEmail = () => copyItem(email, setIsEmailCopied);
  const copyTel = () => copyItem(tel, setIsTelCopied);

  return (
    <div className='contact-item'>
      <p className='name bold'>{name}</p>
      <hr/>
       {email? 
          <ContactItemProperty 
          type={'email'} 
          copy={copyEmail} 
          isCopied={isEmailCopied} 
          text={email} />:null}
       {tel? 
          <ContactItemProperty 
          type={'tel'} 
          copy={copyTel}   
          isCopied={isTelCopied}   
          text={tel} /> :null}
        {address &&(<p className='mb-0'><span className='bold'>address: </span> {address}</p>)||null}
        {postcode&&(<p className='mt-0'><span className='bold '>postcode: </span>{postcode}</p>)||null}
    </div>
  );
};

export default ContactItem;
