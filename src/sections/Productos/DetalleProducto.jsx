import { useState } from 'react';
import { 
  DetailWrapper, BackButton, FlexLayout, DishImage, InfoPane, 
  RatingContainer, ProductTitle, PriceTag, ProductDescription, 
  PurchaseActions, QuantitySelector, OrderButton 
} from './DetalleProducto.styles';

const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push('★');
    } else if (rating >= i - 0.5) {
      stars.push('☆'); // podrías luego cambiarlo por media estrella SVG
    } else {
      stars.push('☆');
    }
  }

  return stars;
};

export function DetalleProducto({ producto, onVolver }) {
  const [cantidad, setCantidad] = useState(1);

  if (!producto) return null;

  const handleAniadirProducto = () => {
    window.alert(
      `¡"${producto.nombre}" x ${cantidad}, fue añadido al carrito con éxito!`
    );
    onVolver();
  }

  return (
    <DetailWrapper>
      <BackButton onClick={onVolver}>◀ Volver al Menú</BackButton>
      
      <FlexLayout>
        <DishImage src={producto.img} alt={producto.nombre} />
        
        <InfoPane>
          <RatingContainer>
            {renderStars(producto.rating).map((star, i) => (
              <span key={i}>{star}</span>
            ))}

            <span>
              {producto.rating.toFixed(1)} ({producto.reviews} opiniones)
            </span>
          </RatingContainer>
          
          <ProductTitle>{producto.nombre}</ProductTitle>
          <PriceTag>{producto.precio.toLocaleString('es-AR')}</PriceTag>
          
          <ProductDescription>
            {producto.desc} Elaborado al momento empleando materias primas frescas de productores locales. Servido con su guarnición caliente y aderezos artesanales de la casa.
          </ProductDescription>
          
          <PurchaseActions>
            <QuantitySelector>
              <button onClick={() => setCantidad(prev => Math.max(1, prev - 1))}>-</button>
              <span>{cantidad}</span>
              <button onClick={() => setCantidad(prev => prev + 1)}>+</button>
            </QuantitySelector>
            
            <OrderButton onClick={handleAniadirProducto}>Agregar al Pedido</OrderButton>
          </PurchaseActions>
        </InfoPane>
      </FlexLayout>
    </DetailWrapper>
  );
}
