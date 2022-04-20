import React from 'react';
import profile from '../img/profile-image.jpeg';
// import { ExternalLink } from 'react-external-link';
// import Resume from '../img/Resume.pdf';

function ImageSection() {

  return (
    <div className='ImageSection'>
        <div className='img'>
            <img src={profile} alt="profileimage" />
        </div>
        <div className="about-info">
            <h4>I am
                <span> Natt</span>
            </h4>

                <p className='about-text'>Full Stack Developer | UX & Graphic Designer
                 </p>
                 
                 <div className="about-details">
                    <div className="left-esction">
                        <p>Full Name</p>
                        {/* <p>Age</p> */}
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Natthaphon Foithong</p>
                        {/* <p>: 39</p> */}
                        <p>: Thai</p>
                        <p>: Thai, English</p>
                        <p>: Sterling, VA 20166</p>
                    </div>
                 </div>
                 {/* <ExternalLink href="https://docs.google.com/document/d/1A-JEaIgluXNKiXQ4R7A4gcCPVzIEymGtnQBEfLK_2nM/edit?usp=sharing" target="_blank" class="my-resume">
                 <button className='btn'>Download Resume</button>
                </ExternalLink> */}
               
                {/* <a href={Resume} download="MyExampleDoc" target='_blank'>
   <button className={classes.navLink}>My Example Doc</button>
</a> */}

                <a href={require("../img/Resume.pdf")} download="resume">
                    <button className='btn'>Download Resume</button>
                </a>

        </div>
    </div>
  )
}

export default ImageSection;