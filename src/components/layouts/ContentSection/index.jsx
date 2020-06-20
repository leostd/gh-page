import React from "react"

class ContentSection extends React.Component {
    render() {
        return (
            <div class="c4p-content-section">
                {this.props.children}
            </div>
        );

    }
}

export default ContentSection;