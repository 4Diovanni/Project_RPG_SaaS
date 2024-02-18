import React from "react";
import './rightSide.css';

function RightSide() {
    return (
        <div className="layout-rightSide">
            
            <div className="layout-info-rightSide">
                <div className="layout-textInfo">
                <div className="text-name">Nome:</div>
                <div className="text-name-logged">Nome exemplo</div>
                </div>
                <div className="layout-textInfo">
                <div className="text-email">Email:</div>
                <div className="text-email-logged">Email exemplo</div>
                </div>
                <div className="layout-textInfo">
                <div className="text-password">Senha:</div>
                <div className="text-password-logged">Senha exemplo</div>
                </div>
            </div>

            <div className="layout-btn-deleteElogout">
                <div className="btn-delete">Excluir Conta</div>
                <div className="btn-logout">Sair</div>
            </div>
        </div>
    );
}

export default RightSide;