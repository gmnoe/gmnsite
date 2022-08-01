import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Skills from './SkillsComponent';
import Projects from './ProjectsComponent';
import ProjectInfo from './ProjectInfoComponent';
import ContactMe from './ContactMeComponent';
// import Contact from './ContactComponent';
import Welcome from './WelcomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
                <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    <Switch>
                        <Route exact path='/welcome' component={Welcome} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/skills' component={Skills} />
                        <Route exact path='/projects' render={() => <Projects projects={this.state.projects} />} />
                        <Route path='/projects/:projectId' component={ProjectWithId} />
                        <Route exact path='/contact' component={ContactMe} />
                        <Redirect to='/welcome' />
                    </Switch>
                </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(Main);