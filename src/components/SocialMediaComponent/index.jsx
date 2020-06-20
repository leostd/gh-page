import React from "react"
import {
    FaMedium,
    FaGithub,
    FaStackOverflow,
    FaGoodreads,
    FaImdb,
} from 'react-icons/fa'

class SocialMediaComponent extends React.Component {
    render() {
        return (
            <div className="social-media">
                    <h1>
                        <FaMedium></FaMedium>
                        <FaGithub></FaGithub>
                        <FaStackOverflow></FaStackOverflow>
                        <FaGoodreads></FaGoodreads>
                        <FaImdb></FaImdb>
                    </h1>
                </div>
        );
    }
}

export default SocialMediaComponent;