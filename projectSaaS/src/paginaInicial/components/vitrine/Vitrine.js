import React from 'react';
import Slider from 'react-slick';
import './Vitrine.css';

function Vitrine() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div className="layout-vitrine">
       <div className='linha-vitrine'></div>
      <Slider {...settings}>
        <div className='vitrine-layout'>
          <div className="personagem">
            <div className='titulo-personagem'>Personagem</div>
          </div>
        </div>

        <div className='vitrine-layout'>
          <div className="reliquias">
            <div className='titulo-reliquias'>Reliquias</div>
          </div>
        </div>

        <div className='vitrine-layout'>
          <div className="armas">
            <div className='titulo-armas'>Armas</div>
          </div>
        </div>
        <div className='vitrine-layout'>
          <div className="personagem">
            <div className='titulo-personagem'>Personagem</div>
          </div>
        </div>

        <div className='vitrine-layout'>
          <div className="reliquias">
            <div className='titulo-reliquias'>Reliquias</div>
          </div>
        </div>

        <div className='vitrine-layout'>
          <div className="armas">
            <div className='titulo-armas'>Armas</div>
          </div>
        </div>
        <div className='vitrine-layout'>
          <div className="personagem">
            <div className='titulo-personagem'>Personagem</div>
          </div>
        </div>

        <div className='vitrine-layout'>
          <div className="reliquias">
            <div className='titulo-reliquias'>Reliquias</div>
          </div>
        </div>

        <div className='vitrine-layout'>
          <div className="armas">
            <div className='titulo-armas'>Armas</div>
          </div>
        </div>
        
      </Slider>
      <div className='linha-vitrine'></div>
    </div>
  );
}

export default Vitrine;
