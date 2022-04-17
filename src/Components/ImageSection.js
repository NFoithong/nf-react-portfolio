import React from 'react';
import profile from '../img/profile-image.jpeg';

function ImageSection() {
  return (
    <div className='ImageSection'>
        <div className='img'>
            <img src={profile} alt="profileimage" />
        </div>
        <div className="about-info">
            <h4>I am
                <span> Lorem ipsum</span>
            </h4>

                <p className='about-text'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quia esse aut, provident velit praesentium eum 
                amet nostrum pariatur soluta. Dolores quam 
                perferendis earum culpa impedit quas ea iure
                 numquam nihil!
                 </p>
                 
                 <div className="about-details">
                    <div className="left-esction">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Natthaphon Foithong</p>
                        <p>: 39</p>
                        <p>: Thai</p>
                        <p>: Thai, English</p>
                        <p>: Sterling, VA 20166</p>
                    </div>
                 </div>
                <button className='btn'>Download Resume</button>
        </div>
    </div>
  )
}

export default ImageSection;