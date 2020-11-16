import React, { Component } from "react";
import Wrapper from "../Wrapper";
import ProjectCard from "../ProjectCard";
import projects from "../../projects.json";
import "./Projects.css";
class Projects extends Component  {
  state = {
    projects
  };

  render (){
    return(
      <div className="main">
        <h2 className="text-center">Projects</h2> 
        <hr/>     
        <Wrapper>
        {this.state.projects.map(project => (
          <ProjectCard
  
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            Deployed={project.Deployed}
            GitRepo={project.GitRepo}
          />
        ))}
      </Wrapper>
    </div>
      

  );

  }

}

export default Projects;
