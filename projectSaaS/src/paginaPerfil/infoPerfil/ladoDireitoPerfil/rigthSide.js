import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Firebase from '../../../firebase.js'; // Caminho ajustado para o seu arquivo de configuração do Firebase
import './rightSide.css';

function RightSide() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Assumindo que você tem uma função para obter o usuário atual em Firebase.js
        const unsubscribe = Firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                // Usuário está logado
                setUser({
                    name: user.displayName, // Ou qualquer campo que você utiliza para o nome
                    email: user.email,
                });
            } else {
                // Usuário não está logado, redireciona ou trata como achar melhor
                navigate('/login');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = () => {
        Firebase.auth.signOut().then(() => {
            navigate('/login');
        }).catch((error) => {
            console.error("Erro ao fazer logout: ", error);
        });
    };

    const handleDeleteAccount = () => {
        const user = Firebase.auth.currentUser;
        user.delete().then(() => {
            navigate('/login');
        }).catch((error) => {
            console.error("Erro ao excluir a conta: ", error);
        });
    };

    return (
        <div className="layout-rightSide">
            
            <div className="layout-info-rightSide">
                <div className="layout-textInfo">
                    <div className="text-name">Nome:</div>
                    <div className="text-name-logged">{user?.name || "Carregando..."}</div>
                </div>
                <div className="layout-textInfo">
                    <div className="text-email">Email:</div>
                    <div className="text-email-logged">{user?.email || "Carregando..."}</div>
                </div>
            </div>

            <div className="layout-btn-deleteElogout">
                <div className="btn-delete" onClick={handleDeleteAccount}>Excluir Conta</div>
                <div className="btn-logout" onClick={handleLogout}>Sair</div>
            </div>
        </div>
    );
}

export default RightSide;
