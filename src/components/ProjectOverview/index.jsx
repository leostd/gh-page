import React from "react";

class ProjectOverview extends React.Component {
    render() {
        return (
            <div class="c4p-component-overview">
                <div className="c4p-img__container">
                    <img src={"img/" + this.props.imgSrc} alt="" className="c4p-img-circle"/>
                </div>
                <div className="c4p-component-overview__title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="c4p-component-overview__description">
                    <p>
                        {this.props.description}
                    </p>
                </div>
                <div className="c4p-component-overview__link">
                    <a href={this.props.targetLink}>Ver mas</a>
                </div>
            </div>
        ); 
    }
}

export default ProjectOverview;