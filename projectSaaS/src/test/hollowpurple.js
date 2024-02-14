// Função para mover as orbs para o centro
function moverParaCentro() {
    document.getElementById('blueOrb').style.left = '50%';
    document.getElementById('redOrb').style.right = '50%';
}

// Função para criar e exibir a purpleOrb no centro após 3 segundos
function criarPurpleOrb() {
    const purpleOrb = document.createElement('div');
    purpleOrb.classList.add('orb'); // Corrigindo para 'orb'
    purpleOrb.id = 'purpleOrb';
    purpleOrb.style.backgroundColor = 'purple';
    purpleOrb.style.width = '250px'; // Dobro do tamanho das orbs azul e vermelha
    purpleOrb.style.height = '250px'; // Dobro do tamanho das orbs azul e vermelha
    purpleOrb.style.left = '50%';
    purpleOrb.style.top = '50%';
    purpleOrb.style.transform = 'translate(-50%, -50%)';
    purpleOrb.style.animation = 'aparecer 1.6s moveUpDown 4s linear infinite';;
    purpleOrb.style.backdropFilter = 'blur(20px)';
    purpleOrb.style.filter='drop-shadow(0px 4px 20px #800080)';
     // Para centralizar
    document.body.appendChild(purpleOrb);
    
}

// Chamando a função para mover as orbs para o centro depois de um tempo (por exemplo, 2 segundos)
setTimeout(moverParaCentro, 1600);

// Chamando a função para criar e exibir a purpleOrb depois de 3 segundos
setTimeout(criarPurpleOrb, 2000);
