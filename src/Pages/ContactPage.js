import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone-solid.svg';
import email from '../img/at-solid.svg';
import location from '../img/location-dot-solid.svg';
import Form from '../Components/Form';
import Title from '../Components/Title';

function ContactPage() {
  return (
      <div>
      <div className="title">
      <Title title={'Contact Me'} span = {'Contact'} /> 
      </div>
      
    <div className='ContactPage'>
        <div className="map-sect">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.7704882229195!2d-77.44006484955355!3d39.04335207944795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6397ad8c7f40f%3A0x30d5eaea93e1457c!2zT-KAmVNBUkEgSE9VU0U!5e0!3m2!1sen!2sus!4v1650342546913!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contact-sect">
                <ContactItem 
                icon={phone} 
                text1={'+1 703-307-7359'}
                title={'Phone'}
                />
                
                <ContactItem 
                icon={location} 
                text1={'Sterling, VA 20166'}
                title={'Location'}
                />

                <ContactItem 
                icon={email} 
                text1={'n.foithong1983@gmail.com'}
                title={'Email'}
                />

                <Form />
        </div>
    </div>
    </div>

  )
}

export default ContactPage;