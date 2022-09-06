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
                <img src="/assets/images/gregNoethlich.PNG" className="center-block" id="me" alt="Gregory Noethlich" />
            </div>
            <br/>
            <div className="row row-content">
                <div className="col">
                    <p id="bio">
                        My name is Greg Noethlich. I am a software engineer, musician, traveler, outdoor enthusiast, and more. As a self taught musician and producer, I have always enjoyed the reward and challenge of learning new things.  I decided to pursue software engineering and I graduated from Nucamp’s Full Stack Web and Mobile Development program. From the moment I produced my first “Hello World” in HTML, I knew I wanted to delve deep into the world of software development.  Software development has offered me an engaging challenge to continually learn and improve my skills while satisfying my creative side through application design and my logical side through problem-solving and implementation.
                        <br /><br/>

                        Before I ever read a line of code, I spent a lot of time working with the public.  From retail management to hospitality service I have needed to be an effective communicator and problem solver.  Prioritization and adaptation have been key components of this portion of my career as well.

                        <br/><br/>

                        The biggest skills that have been refined through software development are problem-solving and adaptability. I am a fast learner and able to pick up new skills and systems quickly.  Additionally, I am well versed in a variety of programming languages, frameworks, libraries, and concepts.  I am also very comfortable collaborating and sharing work with coworkers.  I enjoy taking difficult tasks head-on and bringing them across the finish line.
                    </p>
                    <br></br><br></br><br></br>
                </div>
            </div>
        </div>
    );
}

export default About;