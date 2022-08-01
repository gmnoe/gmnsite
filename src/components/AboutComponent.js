import React from 'react';

function About() {
    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col text-center">
                    <h1 className="text-center">About Me</h1>
                </div>
            </div>
            <hr className="hr" />
            <div className="row row-content">
                <img src="/assets/images/me.png" className="center-block" id="me" alt="Gregory Noethlich" />
            </div>
            <br/>
            <div className="row row-content">
                <div className="col">
                    <p id="bio">
                        My name is Greg Noethlich. I am a software engineer, musician, traveler, outdoor enthusiast and more. As a self taught musician and producer, I have always enjoyed the reward and challenge of learning new things.  I decided to pursue software software engineering and I graduated from Nucamp’s Full Stack Web and Mobile Development program. From the moment I produced my first “Hello World” in HTML, I knew I wanted to delve into the world of software development.  Software development has offered me an engaging challenge to continually learn and improve my skills, while satisfying my creative side through application design and my logical side through problem solving and implementation.
                        <br /><br/>

                        Before starting my software engineering journey, I spent a lot of time working with the public.  From retail management to hospitality service I have needed to be an effective communicator and problem solver.  In these positions it has always been important to be able to adapt quickly to changes that take place day to day.  Another skill learned in these positions is being able to constantly be prioritizing tasks to have a satisfactory outcome in the most efficient way.

                        <br/><br/>

                        The biggest skills that have been refined through software development are problem solving and adaptability. I am a fast learner and able to pick up new skills and apply them effectively and efficiently. I prefer to keep learning, challenging myself, and creating.
                    </p>
                    <br></br><br></br><br></br>
                </div>
            </div>
        </div>
    );
}

export default About;