import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Firebase from '../../../firebase.js'; // Ajuste para o caminho correto do seu Firebase
import { ref, onValue } from 'firebase/database';
import './rightSide.css';

function RightSide() {
    const navigate = useNavigate();
    // Inicializa user como um objeto com propriedades name e email vazias
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        const userAuth = Firebase.auth.currentUser;
        if (userAuth) {
            // Observe que agora passamos `database` como o primeiro argumento para `ref`
            const userRef = ref(Firebase.database, `users/${userAuth.uid}`);
            onValue(userRef, (snapshot) => {
                const userData = snapshot.val();
                if (userData) {
                    setUser({
                        name: userData.userName ?? 'Nome não encontrado',
                        email: userAuth.email,
                    });
                }
            });
        } else {
            navigate('/login');
        }
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
                    <div className="text-name-logged">{user.name}</div>
                </div>
                <div className="layout-textInfo">
                    <div className="text-email">Email:</div>
                    <div className="text-email-logged">{user.email}</div>
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
