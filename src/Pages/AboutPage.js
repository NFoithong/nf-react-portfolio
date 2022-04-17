import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillSection from '../Components/SkillSection';
import ServiceSection from '../Components/ServiceSection';

function AboutPage() {
  return (
    <div className='AboutPage'>
        <Title title={'About Me'} span = {'About Me'} /> 
        <ImageSection />
        <Title title={'My Skills'} span = {'My Skills'} /> 
        <div className="skillsContainer">
            <SkillSection skill={'Javascript'} progress={'60%'} width={'60%'} />
            <SkillSection skill={'Reat Js'} progress={'70%'} width={'70%'} />
            <SkillSection skill={'Node Js'} progress={'70%'} width={'70%'} />
            <SkillSection skill={'Web Design'} progress={'80%'} width={'80%'} />
            <SkillSection skill={'UI/UX Design'} progress={'65%'} width={'65%'} />
            <SkillSection skill={'HTML5'} progress={'80%'} width={'80%'} />
            <SkillSection skill={'CSS3'} progress={'75%'} width={'75%'} />
            <SkillSection skill={'MySQL'} progress={'60%'} width={'60%'} />
            <SkillSection skill={'Graphic Design'} progress={'90%'} width={'90%'} />

        </div>
        <div className="services-container">
            <ServiceSection />
        </div>
    </div>
  )
}

export default AboutPage;