import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import ProjectInfo from './ProjectInfoComponent';
import Contact from './ContactComponent';
import Welcome from './WelcomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS
        };
    }

    render() {

        const ProjectWithId = ({match}) => {
            return (
                <ProjectInfo
                    project={this.state.projects.filter(project => project.id === +match.params.projectId)[0]}
                />
            );
        };

        return (
            <div>
                {window.location.pathname !== '/welcome' ? (<Header />) : null}
                    <Switch>
                        <Route exact path='/welcome' component={Welcome} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/projects' render={() => <Projects projects={this.state.projects} />} />
                        <Route path='/projects/:projectId' component={ProjectWithId} />
                        <Route exact path='/contact' component={Contact} />
                        <Redirect to='/welcome' />
                    </Switch>
            </div>
        );
    }
}

export default withRouter(Main);