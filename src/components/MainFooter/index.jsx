import React from 'react';
import {
    FaMedium,
    FaGithub,
    FaStackOverflow,
    FaGoodreads,
    FaImdb,
} from 'react-icons/fa';

class MainFooter extends React.Component {
    render() {
        return (
            <div className="main-footer">
                <div className="social-media">
                    <h1>
                        <FaMedium></FaMedium>
                        <FaGithub></FaGithub>
                        <FaStackOverflow></FaStackOverflow>
                        <FaGoodreads></FaGoodreads>
                        <FaImdb></FaImdb>
                    </h1>
                </div>
                <p>Copyright 2019.</p>
            </div>
        );
    }
}

export default MainFooter;