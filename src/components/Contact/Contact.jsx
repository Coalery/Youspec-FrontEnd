import ContactUnit from './ContactUnit';

import './Contact.scss';

function Contact({ contact }) {
  contact = [
    {
      id: 1,
      url: 'https://instagram.com/__Coalery',
      type: 'instagram',
    },
    {
      id: 2,
      url: 'https://github.com/Coalery',
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
      <div className="portfolio-contact-title">Contact</div>
      {contact.map((data) => (
        <ContactUnit data={data} />
      ))}
    </div>
  );
}

export default Contact;
