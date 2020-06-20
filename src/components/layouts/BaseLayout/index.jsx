import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div class="c4p-page-container">
                {this.props.children}
            </div>
        );
    }
}

export default BaseLayout;