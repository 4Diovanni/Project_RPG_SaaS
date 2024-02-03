import React from 'react';
import { Link } from 'react-router-dom';
import './Ki-e-magia.css'
import Sun from './sun300x300.png'
import Moon from './moon300x300.png'

function KieMagia() {
    return (
        <div className="ki-e-magia">
            <div className="ki-image"><Link to='/paginaCombate'><img className='sun-KM' src={Sun} alt='Sun SaaS' /></Link>
            <Link to='/'><p>Ki</p></Link></div>
            <div className="about-ki-e-magia"><p>“Somos como Sol e Lua,
                distanciados por corpo, mas
                juntos pelo espirito”</p></div>
            <div className="magia-image"><Link to='/paginaCombate'><img className='moon-KM' src={Moon} alt='Moon SaaS' /></Link>
            <Link to='/'><p>Magia</p></Link></div>
        </div >
    );
}
export default KieMagia;