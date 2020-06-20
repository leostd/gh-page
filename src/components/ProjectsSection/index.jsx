import React from 'react';
import ProjectOverview from '../ProjectOverview';

const projects = [
    {
        title: "code4passion",
        description: "Este es mi blog. En donde publico regularmente informacion relacionada a la tecnologia.",
        img: "random.png"
    },
    {
        title: "Programacion competitiva",
        description: "Es un repositorio en el cual coloco mis soluciones a los problemas de programacion competitiva.",
        img: "random.png"
    },
    {
        title: "Machine learning playground",
        description: "Es un repositorio donde subo mis experimentos relacionados al ML",
        img: "random.png"
    }
];

class ProjectsSection extends React.Component {
    constructor () {
        super();
        console.log(projects);
        this.projects = projects.map((t)=>{
            return (
                <ProjectOverview 
                    imgSrc={t.img}
                    title={t.title}
                    description={t.description}
                    targetLink="#" 
                />
            );
        });
    }

    render () {
        return (
            <div className="c4p-component-projects">
                {this.projects}
            </div>
        );
    }
}

export default ProjectsSection;

