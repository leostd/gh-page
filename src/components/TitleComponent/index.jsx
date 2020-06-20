import React from 'react';


class TitleComponent extends React.Component {
    render () {
        return (
            <div class="c4p-content-section__tilte">
                <h1>{this.props.title}</h1>
                <hr/>
            </div>
        );
    }
}

export default TitleComponent;