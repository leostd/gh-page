import React from 'react';
import { Section } from 'reactstrap';
import { Element } from 'react-scroll';

class ElementSection extends React.Component {

    render() {
        return (
            <Element id={this.props.id}name={this.props.name} className={this.props.elementClassName}>
                <div className={"content-section"}>
                    { this.props.children }
                </div>
            </Element>
        );
    }

}

export default ElementSection;