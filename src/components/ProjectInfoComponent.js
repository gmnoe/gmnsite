import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, 
    Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';

function RenderProject({project}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card>
                        <CardImg top src={project.image2} alt={project.name} />
                    </Card>
                </div>
                <div className="col">
                    <Card>
                        <CardBody>
                            <CardText>{project.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
     );
}

function ProjectInfo(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>{props.project.name}</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderProject project={props.project} />
            </div>
        </div>
    )
}

export default ProjectInfo;  