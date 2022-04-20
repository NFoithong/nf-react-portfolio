import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function HomePage() {
  return (
    <div className="HomePage">
          <header className='hero'>
            <h1 className='hero-text'>
            Hi, I'm <br />
              <span>Natthaphon Foithong</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odit. 
            Recusandae perspiciatis eligendi consequuntur sed dolorum impedit porro voluptatibus, nam rerum totam earum dolor quas quo? Corporis voluptatibus in voluptates?</p>
          </header>
          <div className="icons">
            <Link to='https://www.facebook.com/natthaphon.foithong' target="_blank" className="icon-holder">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
            </Link>
            <Link to="https://www.linkedin.com/in/natthaphon-foithong-a5a70562/" target="_blank" className="icon-holder">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </Link>
            <Link to="https://www.instagram.com/foithong_dsign/" target="_blank" className="icon-holder" href="https://www.instagram.com/foithong_dsign/">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
            </Link>
            <Link to="https://github.com/NFoithong" target="_blank" className="icon-holder" href="https://github.com/NFoithong">
                <FontAwesomeIcon icon={faGithub} className="icon" />
            </Link>             
          </div>
    </div>
  )
}

export default HomePage;