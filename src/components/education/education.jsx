import React from 'react'
import './education.css'
import {BsFillCheckCircleFill} from 'react-icons/bs';

const education = () => {
  return (
    <section id="portfolio">
      <h5>Here are my</h5>
      <h2>Education Details</h2>
      
      <div className='container education__container'>
        <div className='education__frontend'>
          <h3>Education</h3>
          <div className='education__content'>
            <article className='education__details'>
              <BsFillCheckCircleFill className='education__details-icon' />
              <div className='education__details-container'>
                <h4>Adamas International School, Kolkata</h4>
                <small className='text-light'>2006-2010</small>
              </div>
            </article>

            <article className='education__details'>
              <BsFillCheckCircleFill className='education__details-icon' />
              <div className='education__details-container'>
                <h4>St Josheph's School, Katwa</h4>
                <small className='text-light'>2010-2014</small>
              </div>
            </article>

            <article className='education__details'>
              <BsFillCheckCircleFill className='education__details-icon' />
              <div className='education__details-container'>
                <h4>Holy Angel's School, Katwa</h4>
                <small className='text-light'>2014-2018</small><br></br>
                <small className='text-light'>ICSE: 91.8%</small>
              </div>
            </article>

            <article className='education__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='education__details-container'>
                <h4>Jogaymaya Memorial Institute, Singur</h4>
                <small className='text-light'>2018-2020</small><br></br>
                <small className='text-light'>ISC: 89.6%</small>
              </div>
            </article>

            <article className='education__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='education__details-container'>
                <h4>SRM Institute of Science & Technology, Chennai</h4>
                <small className='text-light'>2021-present</small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='education__backend'>
          <h3>Certificates</h3>
          <div className='education__content'>
            <article className='education__details'>
              <BsFillCheckCircleFill className='education__details-icon' />
              <div className='education__details-container'>
                <h4>Full Stack Web Development Bootcamp</h4>
                <small className='text-light'>June 2022</small><br></br>
                <a href="https://drive.google.com/file/d/1gPqpsAAxJta-WWed38sMhiicFuwq8gKZ/view?usp=sharing" target='_blank'>Credentials</a>
              </div>
            </article>

            <article className='education__details'>
              <BsFillCheckCircleFill className='education__details-icon' />
              <div className='education__details-container'>
                <h4>The Ultimate 2022 Fullstack Web Development Bootcamp</h4>
                <small className='text-light'>July 2022</small><br></br>
                <a href="https://www.udemy.com/certificate/UC-ab73db64-9996-4f82-8af1-0bb9674ed36e/" target='_blank'>Credentials</a>
              </div>
            </article>

            <article className='education__details'>
              <BsFillCheckCircleFill className='education__details-icon' />
              <div className='education__details-container'>
                <h4>Certificate of Excellence (Introduction to Java)</h4>
                <small className='text-light'>September 2022</small><br></br>
                <a href="https://certificate.codingninjas.com/verify/a70f838e80f6f4ee" target='_blank'>Credentials</a>
              </div>
            </article>

            <article className='education__details'>
              <BsFillCheckCircleFill className='education__details-icon' />
              <div className='education__details-container'>
                <h4>Certificate of Excellence (Data Structures in Java)</h4>
                <small className='text-light'>January 2023</small><br></br>
                <a href="https://certificate.codingninjas.com/verify/7b1411ec3bd92579" target='_blank'>Credentials</a>
              </div>
            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default education