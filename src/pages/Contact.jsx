import Accordion from '../components/contact components/Accordion';

import useFirestoreCollection from '../hooks/useFirestoreCollection';

const Contact = () => {


const GPs=useFirestoreCollection('gp-list')
 const Pharmacies=useFirestoreCollection('chemists')
 const medicinesInfo=useFirestoreCollection('medsinfo')
 const anticoag=useFirestoreCollection('anticoag')

  return (
    <div className="container flex-col contact-page">
      <h2>Contacts</h2>

      <Accordion
        placeholder={'Search Medicines Information Centers'}
        title='Medicines Information Services'
        arr={medicinesInfo}
      />
      <Accordion
        placeholder={'Search Anticoagulation Centers'}
        title='Anticoagulation Clinics'
        arr={anticoag}
      />
      <Accordion
        placeholder={'Search Community Pharmacies'}
        title='Community Pharmacies'
        arr={Pharmacies}
      />
      <Accordion
        placeholder={'Search GP Surgeries'}
        title='GP Practices'
        arr={GPs}
      />
    </div>
  );
};

export default Contact;
