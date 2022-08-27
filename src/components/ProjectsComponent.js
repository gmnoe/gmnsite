import React from 'react';
import { Card, CardImg, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProjects({project}) {
    return (
        <Card id="projects" className="d-flex align-items-stretch">
            <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none'}}>
                <CardTitle className="text-center">{project.name}</CardTitle>
                <CardImg className="d-flex align-items-stretch h-100" id="directory" src={project.image1} alt={project.name} />
            </Link>
        </Card>
    );
}

function Projects(props) {

    const directory = props.projects.map(project => {
        return (
            <div key={project.id} className="col-md-3 mb-2">
                <RenderProjects project={project} />
            </div>

        );
    });

    return (
        <div className="container-fluid">
            <br />
            <div className="row">
                <div className="col text-center">
                    <h2>Projects</h2>
                    <hr className="hr"/>
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
            <br />
            <div className="row justify-content-center">
                <a href="https://github.com/gmnoe/gmnsite" target="_blank" rel="noreferrer">
                    <Button>
                        <h5>Code Source for this application</h5>
                    </Button>
                </a>
            </div>
            <br />
        </div>
    );
}

export default Projects;