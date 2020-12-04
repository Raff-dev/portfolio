import React, { useState } from "react";
import { MDBContainer, MDBBtn } from 'mdbreact';
import { Section } from "../utilities/Section";

export function Contact({ nextSectionName }) {
    const [state, _setState] = useState({ email: "", name: "", message: "", })
    const [result, _setResult] = useState(null);
    const setState = (values) => {
        for (let [key, value] of Object.entries(values))
            state[key] = value;
    }

    const submit = (event) => {
        const errors = validateForm();
        if (errors.length) {
            setResult(false, errors);
            return
        }
        _setResult(null, []);
        const templateId = "template_ZL8fvZRo";
        const values = {
            message_html: state.message,
            from_name: state.name,
            reply_to: state.email
        }

        window.emailjs.send('raffcontact', templateId, values)
            .then(success)
            .catch(failure);
    };
    const setResult = (valid, messages) => {
        const colorClass = valid ? 'text-success' : 'text-danger';

        _setResult(
            <div className={colorClass + ' result-message'}>
                {messages.map((message, index) => {
                    console.log(index + message)
                    return <p style={{ '--index': messages.length - index }}>{message}</p>
                })}
            </div>)
    }
    const validateForm = () => {
        const errors = [];
        const emailRegex = /\S+@\S+\.\S+/;

        if (state.name.length < 3) errors.push("Name must consist of at least 3 characters");
        if (state.message.length < 10) errors.push("Message must consist of at least 10 characters");
        if (!emailRegex.test(state.email)) errors.push("Please enter a valid email");

        return errors.length ? errors : true;
    }

    const success = (res) => {
        setResult(true, ['Message sent succesfully!']);
    }
    const failure = (err) => {
        setResult(false, ['Failed to send message']);
    }

    return (
        <Section sectionName={"Contact"} nextSectionName={nextSectionName} >
            <div className="section-content contact">
                <MDBContainer>
                    <form>
                        <div className="result-messages">{result}</div>
                        <div className="contact-top">
                            <div className="contact-name">
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">name</label>
                                <input
                                    onChange={(event) => setState({ name: event.target.value })}
                                    type="text"
                                    id="defaultFormContactNameEx"
                                    className="form-control" />
                            </div>
                            <br />
                            <div className="contact-email">
                                <label >email</label>
                                <input
                                    onChange={(event) => setState({ email: event.target.value })}
                                    type="email"
                                    id="defaultFormContactEmailEx"
                                    className="form-control" />
                            </div>
                        </div>
                        <br />
                        <div>
                            <label className="grey-text">Your message</label>
                            <textarea
                                onChange={(event) => setState({ message: event.target.value })}
                                type="text"
                                id="defaultFormContactMessageEx"
                                className="form-control"
                                rows="3" />
                        </div>
                        <div className="contact-submit">
                            <MDBBtn onClick={submit} color="primary">SEND</MDBBtn>
                        </div>
                    </form>
                </MDBContainer>
            </div >
        </Section>
    );
}