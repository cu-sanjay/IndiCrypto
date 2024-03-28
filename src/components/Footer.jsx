import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram,
    faGithub,
    faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">                
                <div className="item1">
                    <span style={{ paddingRight: 3 }}>Made with ❤️ by </span>
                    <span style={{ paddingLeft: 3 }}>
                        Sanjay Choudhary © 2024
                    </span>
                </div>
                <a
                    href="https://github.com/Cu-Sanjay"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/Sanjay2705/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://www.instagram.com/Sannjay._/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://t.me/Sanjay_X3/"
                    target="_blank"
                    className="item6"
                >
                    <FontAwesomeIcon icon={faTelegramPlane} />
                </a>                
            </div>
        </footer>
    );
};

export default Footer;