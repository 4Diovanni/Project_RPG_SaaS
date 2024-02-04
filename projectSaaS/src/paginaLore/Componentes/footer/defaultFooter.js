import React from "react";
import './defaultFooter.css';
import SocialIcons from './redesSociais/defaultSocial';
import Contato from './contatoInfo/contato';
import Informacao from './informacao/informacao';

function Footer() {
    return (
        <div className="footer-lightSkin">
            <div className="layout-footer">
                <Contato />
                <Informacao/>
                <SocialIcons />
            </div>
        </div>
    );
}

export default Footer;