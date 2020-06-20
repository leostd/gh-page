import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link, Element } from 'react-scroll'
import NavBarLogo from '../../logos/NavBarLogo';
class FixedHorizontalNavbar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
                <Navbar light className={"navbar"} expand="md">
                    <NavbarBrand href="/">
                        <NavBarLogo/>
                    </NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className={"nav-items ml-auto"} navbar>
                        <NavItem>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                className="nav-link">
                                Proyectos
                            </Link>
                        </NavItem>
                        <NavItem>
                        <Link 
                            activeClass="active"
                            to="technologies"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="nav-link">
                                Tecnologias
                            </Link>
                        </NavItem>
                        <NavItem>
                        <Link 
                            activeClass="active"
                            to="whoiam"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="nav-link">
                                Quien Soy?
                            </Link>
                        </NavItem>
                        <NavItem>
                        <Link 
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            className="nav-link">
                                Contacto
                            </Link>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}

export default FixedHorizontalNavbar;
