import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';

function RenderProject({project}) {
    return (
        <div className="container">
            <br />
            <div className="row justify-content-center">
                <Card>
                    <CardImg top src={project.image2} alt={project.name} />
                </Card>
            </div>
            <div className="row text-center">
                <p>
                    {project.description}
                </p>
            </div>
            <div className="row justify-content-center">
                <a href={project.github} target="_blank" rel="noreferrer">
                    <Button>
                        <h5>{project.name}</h5>
                    </Button>
                </a>
            </div>
            <br />
        </div>
     );
}

function ProjectInfo(props) {
    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col text-center">
                    <h2>{props.project.name}</h2>
                    <hr className="hr" />
                </div>
            </div>
            <div className="row">
                <RenderProject project={props.project} />
            </div>
        </div>
    )
}

export default ProjectInfo;  