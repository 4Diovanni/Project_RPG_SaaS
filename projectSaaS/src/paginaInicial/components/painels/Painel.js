import React from 'react';
import './Painel.css'
function Painels() {
    return(
    <div className="painels">

        <div className="painels-layout-1">
            <div className="image-site"></div>
            <div className="about-site"></div>

        </div>

        <div className="painels-layout-2">
            <div className="image-history"></div>
            <div className="rpg-history"></div>

        </div>

    </div>
    );
}
export default Painels;