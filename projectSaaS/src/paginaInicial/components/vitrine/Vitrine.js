// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Xiao from './xiao.png';
import Armas from './armas.jpg';
import Reliquias from './reliquias.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Vitrine.css';

// Declaração das funções antes de utilizá-las
const PrevArrow = (props) => {
  const { onClick } = props;
  return <button className="arrow-button prev" onClick={onClick}></button>;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <button className="arrow-button next" onClick={onClick}></button>;
};

const Carousel = () => {
  const data = [
    { id: 1, name: 'Xiao', image: Xiao, link: '/xiao' },
    { id: 2, name: 'Armas', image: Armas, link: '/armas' },
    { id: 3, name: 'Relíquias', image: Reliquias, link: '/reliquias' },
    { id: 1, name: 'Xiao', image: Xiao, link: '/xiao' },
    { id: 2, name: 'Armas', image: Armas, link: '/armas' },
    { id: 3, name: 'Relíquias', image: Reliquias, link: '/reliquias' },
    // Adicione mais dados conforme necessário
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className='layout-carrossel-container'>
      <div className='retangulo-center'>
      <div className='linha-carrossel-topo'></div>
      </div>
      <Slider {...settings}>
        {data.map((item) => (
          <div className='layout-carrosel' key={item.id}>
            <div className='container-imagem'>
              <img className='imagens-carrosel' src={item.image} alt={item.name} />
              <Link to={item.link} style={{ textDecoration: 'none' }}>
              <h3 className='imagens-nome'>{item.name}</h3>
            </Link>
            </div>
            
          </div>
        ))}
      </Slider>
      <div className='retangulo-center'>
      <div className='linha-carrossel-baixo'></div>
      </div>
    </div>
  );
};

export default Carousel;