import React, { useState, useEffect } from "react";
import './leftSide.css';
import Voltar from './left.png';
import Engine from './engrenagem.png';
import UserDefaultImg from './userDefault.png';
import Firebase from '../../../firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as databaseRef, set, get, getDatabase } from "firebase/database";


function LeftSide() {
    const [file, setFile] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState(UserDefaultImg);
    const [userId, setUserId] = useState(null); // Armazena o userId
   
    // Configurar listener para mudanças no estado de autenticação
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
                // Buscar a imagem de perfil atual do usuário
                fetchUserProfileImage(user.uid);
            } else {
                setUserId(null);
                setProfileImageUrl(UserDefaultImg); // Reseta para a imagem padrão se não estiver logado
            }
        });
    }, []);

    const fetchUserProfileImage = (userId) => {
        const db = getDatabase();
        const userProfileRef = databaseRef(db, `users/${userId}/profileImageUrl`);
        get(userProfileRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProfileImageUrl(snapshot.val());
            } else {
                setProfileImageUrl(UserDefaultImg); // Caso não haja imagem, usa a padrão
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!file || !userId) {
            alert("Por favor, escolha uma imagem e certifique-se de estar logado.");
            return;
        }
        const storage = getStorage();
        const fileRef = storageRef(storage, `profileImages/${userId}`); // Nomeia o arquivo com o userId

        uploadBytes(fileRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setProfileImageUrl(downloadURL); // Atualiza a imagem de perfil no estado
                updateUserProfileImage(downloadURL); // Atualiza no banco de dados
            });
        });
    };

    const updateUserProfileImage = (imageUrl) => {
        if (!userId) return;
        const database = getDatabase();
        set(databaseRef(database, `users/${userId}/profileImageUrl`), imageUrl);
    };

    return (
        <div className="layout-leftSide">
            <div className="layout-leftEngine">
                <div className="img-left"><img src={Voltar} alt="voltar para a página inicial" /></div>
                <div className="img-engine"><img src={Engine} alt="ir para a página de configuração de conta" /></div>
            </div>

            <div className="layout-imgPerfil">
                <div className="imgPerfil">
                    {/* Atualiza o src para usar profileImageUrl do estado */}
                    <img src={profileImageUrl} alt="imagem de perfil" />
                </div>
                <div className="layout-btn-changeChooseImg">
                    <input type="file" id="file" hidden onChange={handleImageChange} />
                    <label htmlFor="file" className="btn-chooseImg">Escolher nova imagem</label>
                    <div className="btn-changeImg" onClick={handleUpload}>Alterar imagem</div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;
