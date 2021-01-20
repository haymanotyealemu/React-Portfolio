import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
    return (
        <div className="card">
            <div className="card-text text-center p-2">
                <h5>{props.title}</h5>
            </div>
            <div className="img-container">
                <img alt={props.title} src={props.image} style={{height:'15rem'}}/>
            </div>
            <div className="card-btn btn m-2">
                <a className="btn" href={props.Deployed} rel="noopener noreferrer" target="_blank">Deployed</a>{' '}
                <a className="btn"  href={props.GitRepo} rel="noopener noreferrer" target="_blank">GitHub</a>
            </div>
        </div>
    );
}
export default ProjectCard;