import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillSection from '../Components/SkillSection';
// import ServicesSection from '../Components/ServiceSection';
// import pen from '../img/pen-nib-solid.svg';
// import research from '../img/book-atlas-solid.svg';
// import code from '../img/code-solid.svg';

function AboutPage() {
  return (
    <div className='AboutPage'>
        <Title title={'About Me'} span = {'About Me'} /> 
        <ImageSection />
        <Title title={'My Skills'} span = {'My Skills'} /> 
        <div className="skillsContainer">
            <SkillSection skill={'Javascript'} progress={'65%'} width={'65%'} />
            <SkillSection skill={'React Js'} progress={'70%'} width={'70%'} />
            <SkillSection skill={'Node Js'} progress={'70%'} width={'70%'} />
            <SkillSection skill={'Web Design'} progress={'80%'} width={'80%'} />
            <SkillSection skill={'UI/UX Design'} progress={'70%'} width={'70%'} />
            <SkillSection skill={'HTML5'} progress={'80%'} width={'80%'} />
            <SkillSection skill={'CSS3'} progress={'80%'} width={'80%'} />
            <SkillSection skill={'MySQL'} progress={'65%'} width={'65%'} />
            <SkillSection skill={'Graphic Design'} progress={'90%'} width={'90%'} />

        </div>
        {/* <Title title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={pen} title={'Graphic& Web Design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={research} title={'UI/UX Design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={code} title={'Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div> */}
    </div>
  )
}

export default AboutPage;