import React, { useEffect, useRef } from "react";
import './painelSite.css';
import Logo from '../../logo2-removebg-preview.png';

function PainelSite() {
  const painelRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.querySelector('.logo-image-painel').style.transform = 'translateY(-20px)';
        entry.target.querySelector('.about-site-text').style.opacity = 1;
      }
    }, {
      rootMargin: '0px',
      threshold: 0.5, // Ajuste conforme necessário para disparar a animação quando desejar
    });

    if (painelRef.current) {
      observer.observe(painelRef.current);
    }

    return () => {
      if (painelRef.current) {
        observer.unobserve(painelRef.current);
      }
    };
  }, []);

  return (
    <div ref={painelRef} className="painels">
      <div className="painels-layout-1">
        <div className="image-site">
          <img className='logo-image-painel' src={Logo} alt='Logo do SaaS' />
        </div>
        <div className="about-site">
          <p className='about-site-text'>"Apresento 'As Crônicas de SaaS', meu site que une programação, RPG e portfólio. É o fruto de minha criatividade e dedicação. Espero que gostem!"</p>
        </div>
      </div>
    </div>
  );
}

export default PainelSite;
