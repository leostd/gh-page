import React from 'react';
import { Container, Row } from 'reactstrap';

class ContentLayout extends React.Component {

    render() {
        return (
            <Row>
                { this.props.children }
            </Row>
        );
    }

}

export default ContentLayout;