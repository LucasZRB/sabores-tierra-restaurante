import { useState } from 'react';
import { SectionTitle } from '../Productos/Productos.styles';
import { HistoryWrapper, CarouselContainer, HistoryText, TriangleButton, BackgroundIcon } from './Historia.styles';

const SLIDES_HISTORIA = [
  "“Sabores de la Tierra” nació de un sueño sencillo: recuperar la esencia de las comidas compartidas en torno al fuego. Todo comenzó en una antigua casona de madera, donde las reuniones familiares se llenaban de aromas intensos, vinos generosos y carnes condimentadas con esmero.",
  "Lo que empezó como encuentros entre amigos se transformó en un proyecto más grande: abrir las puertas de un lugar donde cada visitante pudiera sentir la calidez de lo rústico y la fuerza de lo auténtico. Inspirados por la tradición y el respeto a los sabores de nuestra tierra, levantamos un espacio que honra lo natural, lo artesanal y lo verdadero.",
  "Hoy, cada plato que servimos cuenta esa historia: la de un origen humilde, una pasión por la cocina y un compromiso con ofrecer experiencias que nacen de la tierra y se disfrutan en el alma."
];

export function Historia() {
  const [index, setIndex] = useState(0);

  const anterior = () => setIndex((prev) => (prev === 0 ? SLIDES_HISTORIA.length - 1 : prev - 1));
  const siguiente = () => setIndex((prev) => (prev === SLIDES_HISTORIA.length - 1 ? 0 : prev + 1));

  return (
    <HistoryWrapper>
      <SectionTitle>Nuestra Historia</SectionTitle>
      
      {/* SVGs o Iconos decorativos de fondo (puedes reemplazarlos por tus componentes SVG) */}
      <BackgroundIcon className="left">
        <svg width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
      </BackgroundIcon>
      
      <CarouselContainer>
        <TriangleButton onClick={anterior}>◀</TriangleButton>
        <HistoryText>{SLIDES_HISTORIA[index]}</HistoryText>
        <TriangleButton onClick={siguiente}>▶</TriangleButton>
      </CarouselContainer>
      
      <BackgroundIcon className="right">
        <svg width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.034 8.485c.184.343.273.722.273 1.1a2.25 2.25 0 1 1-4.5 0c0-.378.089-.757.273-1.1L5.43 5.39a1 1 0 1 1 1.414-1.414l1.65 1.65 1.65-1.65a1 1 0 1 1 1.414 1.414l-1.524 3.095z"/>
        </svg>
      </BackgroundIcon>
    </HistoryWrapper>
  );
}
