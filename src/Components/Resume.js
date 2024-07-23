import React, {Component} from "react";
import Slide from "react-reveal";
import SkillBadge from "./SkillBadge";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const softskillmessage = this.props.data.softskillmessage;
    const education = this.props.data.education.map(function (education) {
      return (<div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>);
    });

    const work = this.props.data.work.map(function (work) {
      return (<div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>);
    });

    const project = this.props.data.project.map(function (project){
      return (<div key={project.name}>
        <h3>{project.name}</h3>
        <p className="info">
          {project.company}
          <span>&bull;</span> <em className="date">{project.years}</em>
        </p>
        <p>{project.description}</p>
        <p>{project.responsibility}</p>
        <p><span>&bull; </span> {project.duty}</p>
        <p><span>&bull;</span>{project.duty2}</p>
        <p><span>&bull;</span>{project.duty3}</p>
        <p><span>&bull;</span>{project.duty4}</p>
      </div>);
    });

    const other_experience = this.props.data.other_experience.map(function (other_experience) {
      return (<div key={other_experience.company}>
        <h3>{other_experience.company}</h3>
        <p className="info">
          {other_experience.title}
          <span>&bull;</span> <em className="date">{other_experience.years}</em>
        </p>
        <p>{other_experience.description}</p>
      </div>);
    });

    const skills = this.props.data.skills.map((skills) => {


      return (<li key={skills}>
      </li>);
    });

    const softSkills = this.props.data.softSkills.map((softSkill) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + softSkill.name.toLowerCase();
      const width = softSkill.level;

      return (<li key={softSkill.name}>
        <span style={{width, backgroundColor}} className={className}></span>
        <em>{softSkill.name}</em>
      </li>);
    });

    return (<section id="resume">
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
      </Slide>


      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="space">Back-end Skills</div>
            <div className="box">
              <SkillBadge imageUrl={'images/skill/java.png'} color={'#FFFFFF'} size={80} note={'Java'}/>
              <SkillBadge imageUrl={'images/skill/python.png'} color={'#FFFFFF'} size={80} note={'Python'}/>
              <SkillBadge imageUrl={'images/skill/nodejs.png'} color={'#FFFFFF'} note={'NodeJS'}/>
            </div>
            <div className="clearfix space">Front-end Skills</div>
            <div className="box" >
              <SkillBadge imageUrl={'images/skill/php.png'} color={'#FFFFFF'} note={'PHP'}/>
              <SkillBadge imageUrl={'images/skill/html.png'} color={'#FFFFFF'} note={'HTML'}/>
              <SkillBadge imageUrl={'images/skill/css.png'} color={'#FFFFFF'} size={80} note={'CSS'}/>
              <SkillBadge imageUrl={'images/skill/js.png'} color={'#FFFFFF'} note={'JavaScript'}/>
            </div>
            <div className="clearfix space">Other Skills</div>
            <SkillBadge imageUrl={'images/skill/mysql.png'} color={'#FFFFFF'} note={'MySQL'}/>
            <SkillBadge imageUrl={'images/skill/aws.png'} color={'#FFFFFF'} size={80} note={'AWS'}/>
            <SkillBadge imageUrl={'images/skill/git.png'} color={'#FFFFFF'} note={'Git'}/>
            <SkillBadge imageUrl={'images/skill/jira.png'} color={'#FFFFFF'} note={'Jira'}/>
            <SkillBadge imageUrl={'images/skill/monday.png'} color={'#FFFFFF'} size={80} note={'Monday.com'}/>
          </div>
        </div>
      </Slide>


      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Project</span>
            </h1>
          </div>
          <div className="nine columns main-col">{project}</div>
        </div>
      </Slide>


      <Slide left duration={1300}>
        <div className="row work">
          <h1>
            <span>Other Experience </span>
          </h1>
          <div className="three columns header-col">
          </div>

          <div className="nine columns main-col">{other_experience}</div>
        </div>
      </Slide>




    </section>);
  }
}

export default Resume;
