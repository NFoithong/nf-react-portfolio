import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ExternalLink } from 'react-external-link';

function HomePage() {
  return (
    <div className="HomePage">
          <header className='hero'>
            <h1 className='hero-text'>
            Hi, I'm <br />
              <span>Natthaphon Foithong</span><br />
            
            Full Stack Developer <br />
            UX & Graphic Designer</h1>
            <p>Full Stack Web Developer leveraging background in 
            Graphic and UX design to provide unique perspectives on 
            how end-users interact with websites and software platforms. 
            Earned a certificate in Full Stack Web Development 
            from The George Washington University Coding Boot Camp. 
            Innovative problem-solver who is passionate about developing apps 
            with a focus on mobile-first design and development. 
            Strengths in creativity, teamwork, 
            and building projects from ideation to execution.</p>
          </header>
          <div className="icons">
            <ExternalLink href='https://www.facebook.com/natthaphon.foithong' target="_blank" className="icon-holder">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/natthaphon-foithong-a5a70562/" target="_blank" className="icon-holder">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </ExternalLink>
            <ExternalLink href="https://www.instagram.com/foithong_dsign/" target="_blank" className="icon-holder">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
            </ExternalLink>
            <ExternalLink href="https://github.com/NFoithong" target="_blank" className="icon-holder">
                <FontAwesomeIcon icon={faGithub} className="icon" />
            </ExternalLink>             
          </div>
    </div>
  )
}

export default HomePage;