import React from 'react'
import './about.css'
import ME from '../../assets/me-avatar.png'
import { FaAward } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BsFillFolderFill } from 'react-icons/bs';

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
             <h5>Experience</h5>
             <small>Intern at Coding Ninjas</small>
            </article>

            <article className='about__card'>
              <MdWork className='about__icon'/>
             <h5>Student</h5>
             <small>3rd Year Undergrad</small>
            </article>

            <article className='about__card'>
              <BsFillFolderFill className='about__icon'/>
             <h5>Projects</h5>
             <small>+10projects</small>
            </article>
          </div>

          <p>
            Hey there, I am an aspiring software developer, currently I am a Computer Science student at SRM
            Institute of science and Technology, Chennai.
            <br />
            <br />
            I am fluent in classics like C++, Java and Python.
            My field of Interest's are building new  Web Technologies and Products and also 
            in areas related to Artificial Intelligence.
            <br />
            <br />
            Feel free to reach out to me to discuss collaboration opportunities, networking, 
            or simply to exchange ideas about the exciting world of software development. 
            Let&apos;s build something amazing together!
          </p>
          <a href="#contact" className='btn btn-primary'>Get in touch</a>
          
        </div>
      </div>
    </section>
  )
}

export default about