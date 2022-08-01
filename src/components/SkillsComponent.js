import React from 'react';
import SkillCloud from './SkillCloudComponent';

function Skills(props) {

    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col text-center">
                    <h1>Skills</h1>
                </div>
            </div>
                <hr className="hr" />
            {/* <div className="row">
                    <SkillCloud />
            </div>
            <hr className="hr" /> */}
            <div className="row">
                <div className="col">
                    <p>
                        I use <b>HTML</b> and <b>CSS</b> in every project I do.  The <b>Bootstrap</b> framework is excellent for assisting in <b>responsive web design</b> and limiting the amount of code needed in my <b>CSS</b> file.
                        <br/><br/>
                        <b>JavaScript</b> is my programming language of choice. I use <b>React</b> to create front end web applications. <b>Redux</b> is a great tool used to manage state within my <b>React</b> applications, as well as improving performance and maintaining code.  I use <b>React Native</b> along with the <b>Expo SDK</b> to create a mobile applications.  For back end I use <b>Nodejs</b> with the <b>Express</b> framework to create <b>RESTFUL API&#39;s</b>, utilizing <b>MongoDB</b> for the database and testing with <b>Postman</b>.
                        <br/><br/>
                        I use <b>Git</b> for all my programming work and submit working and finished projects to <b>Github</b>. All of my coding is written in the <b>Virtual Studio Code</b> text editor.
                    </p>
                </div>
                {/* <div className="col align-self-center">
                    <SkillCloud />
                </div> */}
            </div>
            <hr className="hr" />
            <div className="row">
                <div className="col">
                    <h3>Technical Skills</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS &#40;Bootstrap&#41;</li>
                            <li>JavaScript &#40;Reactjs, Nodejs, jQuery, ES6, Redux, React Native&#41; </li>
                            <li>Expressjs, MongoDB, Postman</li>
                            <li>Responsive Web Design</li>
                            <li>RESTful API's</li>
                            <li>XML and JSON</li>
                            <li>Git and Github</li>
                            <li>Virtual Studio Code</li>

                        </ul>
                </div>
                <div className="col">
                    <h3>Soft (Real) Skills</h3>
                        <ul>
                            <li>People-person with a friendly attitude</li>
                            <li>Efficient and effective communicator</li>
                            <li>Self-organized and able to work independently</li>
                            <li>Great time management</li>
                            <li>Hunger for excellence</li>
                            <li>Able to retain and apply new knowledge</li>
                            <li>Strong work ethic</li>
                            <li>Open to receiving clear and useful criticism</li>
                            <li>Always curious and humble</li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;  