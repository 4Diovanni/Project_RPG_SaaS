import React from 'react';
import Github from './github.png';
import Instagram from './instagram.png';
import Linkedin from './linkedin.png';
import './defaultSocial.css';

function SocialIcons() {
    return (
        <div className='all-icons'>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/giovanni-moreira-64654a254/" title="linkedin icons">
                    <img className='icon' src={Linkedin} alt="Linkedin Icon" />
                </a>
            </div>
            <div className="instagram">
                <a href="https://www.instagram.com/4dio.g4/" title="instagram logo icons">
                    <img className='icon' src={Instagram} alt="Instagram Icon" />
                </a>
            </div>
            <div className="github">
                <a href="https://github.com/4Diovanni" title="github icons">
                    <img className='icon' src={Github} alt="Github Icon" />
                </a>
            </div>
        </div>
    );
}

export default SocialIcons;
