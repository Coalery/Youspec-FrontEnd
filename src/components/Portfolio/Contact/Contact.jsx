import ContactUnit from './ContactUnit';

import './Contact.scss';
import Title from '../Title/Title';

function Contact({ contact }) {
  contact = [
    {
      id: 1,
      url: '__Coalery',
      type: 'instagram',
    },
    {
      id: 2,
      url: 'Coalery',
      type: 'github',
    },
    {
      id: 3,
      url: 'doralife12@naver.com',
      type: 'email',
    },
  ];

  return (
    <div className="portfolio-contact-container">
      <Title icon="📞" text="Contact" />
      {contact.map((data) => (
        <ContactUnit key={`portfolio-contact-id-${data.id}`} data={data} />
      ))}
    </div>
  );
}

export default Contact;
