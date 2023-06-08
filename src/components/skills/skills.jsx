import React from 'react'
import './skills.css'
import {BsFillCheckCircleFill} from 'react-icons/bs';

const Skills = () => {
  return (
    <section id="skills">
      <h5>Which skills I have?</h5>
      <h2>My skills</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Fronend Developement</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>MongoDb</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>SQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Express Js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Languages</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div className='experience__details-container'>
                <h4>Go</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills