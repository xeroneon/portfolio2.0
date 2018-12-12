import React from "react";

const Portfolio = (props) => {
    return (

        <div className="col s12 m6 l4">
            <div className="card medium">
                <div className="card-image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="card-content">
                    <span className="card-title">{props.title}</span>
                    <p>{props.summary}</p>
                </div>
                <div class="card-action">
                    <a className="light-blue-text text-lighten-2" href={props.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a className="light-blue-text text-lighten-2" href={props.repo} target="_blank" rel="noopener noreferrer">Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio; 