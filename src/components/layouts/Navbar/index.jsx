import React from "react"
import SocialMediaComponent from "../../SocialMediaComponent";
import NavBarLogo from "../../logos/NavBarLogo";

const sections = [
    "Home",
    "Proyectos",
    "Acerca de mi",
    "Tecnologias",
    "Contacto"
];

class Navbar extends React.Component {
    
    render() {
        return (
            <div class="c4p-navbar">
                <div className="c4p-navbar__top">
                    <div className="c4p-img__container">
                        <img src="img/leo_icpc.jpg" alt="" className="c4p-img-circle"/>
                    </div>
                    <ul class="c4p-navbar__list">
                        <NavBarLogo></NavBarLogo>
                        {sections.map((section)=>{ return <li class="c4p-navbar__item">{section}</li> })}
                    </ul>
                </div>

                <SocialMediaComponent></SocialMediaComponent>
            </div>
        );

    }
}

export default Navbar;