import React from 'react';
import TechnologyImage from '../layouts/TechnologyImage';
import ElementSection from '../layouts/ElementSection';
import TitleComponent from '../TitleComponent';

const technologies = [
    "javascript",
    "c++",
    "java",
    "gatsby",
    "jenkins",
    "kubernetes",
    "linux",
    "rproject",
    "scss",
    "typescript",
    "windows",
    "yaml",
    "git"
]

class TechnologiesSection extends React.Component {

    constructor() {
        super();
        this.technologies = technologies.map(
            (t) => {
                return (<TechnologyImage src={t}/>);
            });
    }

    render() {
        return (
            <ElementSection name={this.props.name} elementClassName={this.props.elementClassName} sectionClassName={this.props.sectionClassName}>
                <div className="technologies-container">
                    {this.technologies}
                </div>
            </ElementSection>
        );
    }
}

export default TechnologiesSection;

