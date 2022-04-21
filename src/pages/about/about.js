import React from 'react'

import './about.css'
function About() {
  return (
    <div className='about'>
        <div className='wrapper_top'>
            <img className='profile_pic'src='https://cdn.discordapp.com/attachments/701704635790000238/965791505937743932/1AC80B92-EDD8-4EE0-912B-D50F9D8240F0.jpg' alt='profile_picture'/>
            <div className='wrapper_top_right'>
                <h1><span>Hanze Zhu</span></h1>
                <p><span> I am a seasoned software expert who has developed products for enterprise clients such as Intuit, Yale University, and Hewlett-Packard (HP), as well as many venture-backed businesses. I specialize in building applications specific to the business needs of my clients. I have done work in software development, mobile app creation, front-end/back-end web, database/server management, graphic design, and video game development.</span></p>
            </div>
        </div>
        <div className='wrapper_middle'>
            <h1>Projects</h1>
            <div className='middle_desc'>
              <h2>PROJECTS COMPLETED</h2>
              <p>Over the past three years, I have completed many website projects including iOS/Android apps, Mac/Windows programs, Unity/Unreal video games, and web apps.</p>
            </div>
        </div>
        <div className='wrapper_buttom'>
          <div className='buttom_blocks'>
            <img src='https://mattfarley.ca/img/icons/frontend.svg'/>
            <h2>Front End Dev</h2>
            <h3>Tools and Languages I Use</h3>
            <p>HTML, CSS, Javascript, Python</p>
            <p>React, Redux, Node.js, RESTful API</p>
            <p>AWS, Git, Jest, Firebase</p>
            <p>Tableau, Figma <span>and more.</span></p>
          </div>
          <div className='buttom_blocks'>
            <img src='https://mattfarley.ca/img/icons/mentor.svg'/>
            <h2>Education</h2>
            <h3>Where I Learned My Skills</h3>
            <p>University of California, Santa Barbara</p>
            <p>Coding Dojo</p>
            <p>California Technology University</p>
            <p>and self learning</p>
          </div>
          <div className='buttom_blocks'>
            <img src='https://mattfarley.ca/img/icons/designer.svg'/>
            <h2>Hobbies</h2>
            <h3>What I Enjoy Besides Working</h3>
            <p>Hip Hop Dance</p>
            <p>Competitive Gaming</p>
            <p>Rap</p>
            <p>I have two dogs</p>
          </div>
        </div>
        <div className='footer'>
          <p>@2022 Hanze Zhu.</p>
        </div>
    </div>
  )
}

export default About