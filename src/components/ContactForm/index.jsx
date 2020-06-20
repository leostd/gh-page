import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import ElementSection from "../layouts/ElementSection";
import TitleComponent from "../TitleComponent";

class ContactForm extends React.Component {
    render () {
        return (
          //<ElementSection name={this.props.name} elementClassName={this.props.elementClassName} sectionClassName={this.props.sectionClassName}>
          <div className="c4p-contact-form__container">
              <form class="c4p-contact-form">
                    <label for="email">Email</label>
                    <input />
                    <label for="full_name">Full Name</label>
                    <input />
                    <label for="message">Message</label>
                    <input type="textarea" name="contact-message" id="contact-message"/>
              </form>
          </div>
          //</ElementSection>
        );
    }
}

export default ContactForm;
