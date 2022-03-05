import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProjects({project}) {
    return (
        <Card>
            <Link to={`/projects/${project.id}`}>
                <CardImg src={project.image} alt={project.name} />
                <CardImgOverlay>
                    <CardTitle>{project.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Projects(props) {

    const directory = props.projects.map(project => {
        return (
            <div key={project.id} className="col-md-5 m-1">
                <RenderProjects project={project} />
            </div>
        );
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <h2>Projects</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Projects;