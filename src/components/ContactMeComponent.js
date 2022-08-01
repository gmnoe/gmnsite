import React, { useRef } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import emailjs from 'emailjs-com';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function ContactMe () {
        const form = useRef();

        const sendEmail = (e) => {
            // e.preventDefault();
         
            emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_USER_ID
              ).then(
                result => {
                  console.log(result.text);
                },
                error => {
                  console.log(error.text);
                }
              );

              e.target.reset();
          };

  return (
    <div className="container">
    <br />
    <div className="row row-content">
        <div className="col-12">
            <h1 className="text-center">Contact Me</h1>
            <hr className="hr" />
        </div>
        <div className="col-md-10">
            <LocalForm ref={form} onSubmit={sendEmail}>
                <Row className="form-group">
                    <Label htmlFor=".firstName" md={2}>First Name: </Label>
                    <Col md={10}>
                        <Control.text model=".firstName" id=".firstName" name="firstName"
                            placeholder="First Name"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".firstName"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                            />
                    </Col>
                </Row>
                <Row className="form-group">                                
                <Label htmlFor="lastName" md={2}>Last Name: </Label>
                    <Col md={10}>
                        <Control.text model=".lastName" id="lastName" name="lastName"
                            placeholder="Last Name"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".lastName"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                    </Col>                        
                </Row>
                <Row className="form-group">
                    <Label htmlFor="phoneNum" md={2}>Phone Number: </Label>
                    <Col md={10}>
                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                            placeholder="Phone number"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(10),
                                maxLength: maxLength(15),
                                isNumber
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".phoneNum"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 10 numbers',
                                maxLength: 'Must be 15 numbers or less',
                                isNumber: 'Must be a number'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="email" md={2}>Email Address: </Label>
                    <Col md={10}>
                        <Control.text model=".email" id="email" name="email"
                            placeholder="Email"
                            className="form-control"
                            validators={{
                                required,
                                validEmail
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid email address'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="feedback" md={2}>Inquiries and Feedback: </Label>
                    <Col md={10}>
                        <Control.textarea model=".feedback" id="feedback" name="feedback"
                            rows="12"
                            className="form-control"
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={{size: 10, offset: 2}}>
                        <Button type="submit" color="info">
                            Send Message
                        </Button>
                    </Col>
                </Row>
            </LocalForm>
        </div>
    </div>
</div>
  );
}

export default ContactMe;