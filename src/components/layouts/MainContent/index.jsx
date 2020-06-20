import React from "react";

class MainContent extends React.Component {
    render() {
        return (
            <div class="c4p-main-content">
                {this.props.children}
            </div>
        )
    }
}

export default MainContent;