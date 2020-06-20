import React from "react";
import {
    CardDeck,CardImg, CardBody,
    CardTitle, CardText, Card,
    CardGroup
} from "reactstrap";
import Element from "react-scroll";
import ContentLayout from "../layouts/ContentLayout";
import ElementSection from "../layouts/ElementSection";

class OverviewSection extends React.Component {
    render() {
        return (
            <ElementSection name={this.props.name} elementClassName={this.props.elementClassName} sectionClassName={this.props.sectionClassName}>
                <h1>{this.props.title}</h1>
                <hr></hr>
                <CardDeck>
                    <Card>
                        <CardImg></CardImg>
                        <CardBody>
                            <CardTitle>Bla Bla</CardTitle>
                            <CardText>ble ble</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="img/random.png"></CardImg>
                        <CardBody>
                            <CardTitle>Bla Bla</CardTitle>
                            <CardText>ble ble</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="img/random.png"></CardImg>
                        <CardBody>
                            <CardTitle>Bla Bla</CardTitle>
                            <CardText>ble ble</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
            </ElementSection>
        );
    }
}

export default OverviewSection;