import React from 'react';

class TechnologyImage extends React.Component {
    render() {
        return (
            <div className="technology-image-container">
                <img src={"img/technologies/" + this.props.src + ".png"} alt="{this.props.src}" className="img-technology img-responsive rounded-circle" width="100" height="100"/>
                <div class="technology-img-overlay rounded-circle">
                    <div class="technology-img-overlay-text">{this.props.src}</div>
                </div>
            </div>
        );
    }
}

export default TechnologyImage;

