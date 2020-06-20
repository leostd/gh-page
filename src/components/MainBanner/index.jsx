import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

class MainBanner extends React.Component {
    render() {
        return (
            <div className="container-fluid">
            <Jumbotron className={"main-jumbotron"}>
                <div className="jumbotron-header">
                    <h1 className="first">HELLO(World)!</h1>
                    <h1 className="second">My name is: </h1>
                </div>
                <div className="jumbotron-body">
                    <h1>> Leonardo Santella</h1>
                </div>
                <div className="jumbotron-footer">
                </div>
            </Jumbotron>
            </div>
        );
    }
}

export default MainBanner;
