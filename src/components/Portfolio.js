import React from "react";
import Card from "./Card";
import projects from "../projects"

const Portfolio = (props) => {
    return (
        <div className="portfolio container scrollspy" id="#portfolio">
            <div class="divider"></div>
            <div className="row">
                <h2 className="teal-text text-accent-3">Portfolio</h2>
                {projects.map(project => {
                    return <Card title={project.title} summary={project.summary} image={project.image} link={project.link} repo={project.repo} />
                })}
            </div>
        </div>
    )
}

export default Portfolio;