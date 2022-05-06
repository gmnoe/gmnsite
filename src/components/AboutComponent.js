import React from 'react';

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="text-center">About Me</h1>
                </div>
            </div>
            <hr className="hr" />
            <div className="row row-content">
                <img src="/assets/images/me.jpeg" className="center-block" id="me" alt="Gregory Noethlich" />
            </div>
            <div className="row row-content">
                <div className="col mx-auto">
                    <p id="bio">
                    Before starting my software development journey, I spent a lot of time working with the public.  From retail management to hospitality service I have needed to be an effective communicator and problem solver.  In these positions it has always been important to be able to adapt quickly to changes that take place day to day.  Another skill learned in these positions is being able to constantly be prioritizing tasks to have a satisfactory outcome in the most efficient way.  I have been commended many times for my execution of all these skills.
                    I enjoyed my customer service work, but have alway felt under employed and wanting to pursue a technical career.  As a self taught musician and music producer, I have always enjoyed learning new things.  In August of 2020, the path became clear for me to pursue a career in technology, I enrolled in NuCamp in October of 2020.  After dedicating eight months of twenty plus hours a week learning programming languages and tools, I went from my first “Hello World” in HTML to developing full stack web applications. Some of the biggest skills I learned from my experience are problem solving and adaptability. I am confident I can learn how to use any new tool or software effectively and efficiently.
                    Self-motivated developer with experience in full-stack JavaScript. Professional strengths include creative problem-solving, written and verbal communication, time management, and customer service. Looking to apply my passion for learning, programming, and solving problems in a collaborative environment. 
                    </p>
                    <br></br><br></br><br></br>
                </div>
            </div>
        </div>
    );
}

export default About;