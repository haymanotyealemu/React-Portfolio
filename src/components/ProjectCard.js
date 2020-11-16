import React from "react";
import "./ProjectCard.css";
import {Link} from "react-router-dom";
function ProjectCard(props) {
    return (
        <div className="card">
            <div className="card-text text-center">
                <h5>{props.title}</h5>
            </div>
            <div className="img-container">
                <img alt={props.title} src={props.image} style={{height:'10rem'}}/>
            </div>
            <div className="card-btn btn m-2">
                <Link to={props.Deployed} className="btn p-2 btn-info" target="_blank">Deployed</Link>{' '}<Link href={props.GitRepo} className="btn p-2 btn-info" target="_blank">Git-Repo</Link>
            </div>
        </div>
    );
}
export default ProjectCard;