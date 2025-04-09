import { forwardRef } from 'react';
import ResumeHeader from './ResumeHeader';
import Education from './Education';
import Skill from './Skill';
import WorkExperience from './WorkExperience';

import './ResumeBody.scss';

// eslint-disable-next-line react/display-name
const ResumeBody = forwardRef((_props, ref) => {
  return (
    <div id='printable-content' ref={ref} className='resumeBody'>
      <ResumeHeader />
      <main className='main'>
        <div className="main-left">
          <div className='section-header-6rem'><span className='h3-i'><i className='fa-solid fa-code'></i>&nbsp;Technical Skills</span></div>
          <div>&nbsp;</div>
          <Skill category={'Languages'} skills={'VB.NET, C#, Java, TypeScript, Kotlin, PHP'} />
          <Skill category={'Front End'} skills={'HTML/CSS/JavaScript, jQuery, Bootstrap, SASS, TailwindCSS, Razor'} />
          <Skill category={'Libraries / Frameworks'} skills={'ASP.NET, ReactJS, Next.JS, Node.JS, Express.JS, Entity Framework'} />
          <Skill category={'Architectures'} skills={'WebForms, MVC, MVVM, WebAPI'} />
          <Skill category={'Database'} skills={'Microsoft SQL, MySQL, SQLite, MongoDB'} />
          <Skill category={'Version Control'} skills={'Visual Source Safe, Team Foundation Services, Git/GitHub'} />
          <Skill category={'Tools'} skills={'Visual Studio, VS Code, Android Studio, XCode, MS SQL Server Mgmt Studio, Compass, Postman'} 
          />
        </div>
        <div className="main-right">
          <div className='section-header-4rem'><span className='h3-i'><i className='fa-solid fa-hammer'></i>&nbsp;Work Experience</span></div>
          <div>&nbsp;</div>
          <WorkExperience
            business={'Enhance IT'}
            date1={'Sept 2020'}
            date2={'Feb 2022'}
            accomplishments={[
              {
                key: 'eit1',
                value: `
                  Worked C2C in teams for Walmart, Google, and Wayfair to develop 
                  Android applications using Java and Kotlin.
              `},
              {
                key: 'eit2',
                value: `
                  Worked in Agile/Scrum environments at Walmart and Wayfair in 2-week sprints.
              `},
              {
                key: 'eit3',
                value: `
                  Converted an Android Application from Java to Kotlin and ran both side-by-side 
                  using Build Variants giving consumers the option to code in either language 
                  an application to communicate with Chromecast devices using the Chromecast SDK.
              `},
              {
                key: 'eit3',
                value: `
                  Developed portions of E-Commerce applications using MVVM Clean Architecture 
                  pattern for Walmart and Wayfair.
              `},
            ]}
          />
          <WorkExperience
            business={'Murry Energy Corporation'}
            date1={'Apr 2018'}
            date2={'Feb 2020'}
            accomplishments={[
              {
                key: 'mec1',
                value: `
                  Assisted in requirements design and system design for a new Enterprise 
                  Resource Planning (ERP) system and developed portions of the software.
              `},
              {
                key: 'mec2',
                value: `
                  Created front-end interfaces using ASP.NET MVC 5 Razor and utilized Telerik 
                  controls for easy-to-implement features such as dropdown lists and data grids.
              `},
              {
                key: 'mec3',
                value: `
                  Developed and unit-tested Web API 2 modules using C#, Entity Framework, and MS SQL.
              `},
              {
                key: 'mec3',
                value: `
                  Migrated a pre-existing database with data into a new database with new tables 
                  and columns by creating an MS SQL Stored Procedure to automate the task.
              `},
            ]}
          />
          <WorkExperience
            business={'Challenger Learning Center'}
            date1={'Jan 2018'}
            date2={'May 2019'}
            accomplishments={[
              {
                key: 'clc1',
                value: `
                  Developed interactive communication applications using ASP.NET Core MVC, Razor, 
                  Entity Framework, MS SQL, and SignalR for real-time communication between interfaces 
                  for data transfer and chat.
              `},
              {
                key: 'clc2',
                value: `
                  Created administrative backends for adding Challenger sites, users, and reading 
                  scripts using MVC.
              `},
              {
                key: 'clc3',
                value: `
                  Utilized HTML5 canvas to display interactive maps for plotting data.
              `},
            ]}
          />
        </div>
      </main>
      <footer className='page-break'>
        <div className='section-header-4rem'><span className='h3-i'><i className='fa-solid fa-graduation-cap'></i>&nbsp;Education</span></div>
        <div>&nbsp;</div>
        <Education school={'Wheeling Jesuit University'} date1={'Fall 2005'} date2={'Spring 2008'} degree={'BS in Computer Science'} />
        <Education school={'WV Northern Comm College'} date1={'Fall 2003'} date2={'Spring 2005'} degree={'AAS in CIT - Computer Programming and System Development'} />
      </footer>
    </div>
  );
});

export default ResumeBody