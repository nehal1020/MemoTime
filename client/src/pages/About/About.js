import React from 'react';
import AboutPage from './AboutPage';
import Testimonial from './Testimonial';
import TeamMember from './TeamMember';
import Footer from './Footer';


const About = () => {
  return (
    <>
    <div className="about">
      <AboutPage />
    </div>


    <div className='about-testimonial-style'>
          <Testimonial />
    </div>

    <div className="about-team-style">
         <TeamMember />
    </div>

    <div className="about-footer-style">
         <Footer />
    </div>

    </>
  )
}
export default About;