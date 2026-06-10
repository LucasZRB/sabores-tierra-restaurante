import { useState } from 'react';
import { 
  DetailWrapper, BackButton, FlexLayout, DishImage, InfoPane, 
  RatingContainer, ProductTitle, PriceTag, ProductDescription, 
  PurchaseActions, QuantitySelector, OrderButton 
} from './DetalleProducto.styles';

export function DetalleProducto({ producto, onVolver }) {
  const [cantidad, setCantidad] = useState(1);

  if (!producto) return null;

  // Precios ficticios según el plato seleccionado para simular realismo
  const preciosMock = { 1: '$14.500', 2: '$11.200', 3: '$9.800' };
  const notasMock = { 1: '4.9 (120 opiniones)', 2: '4.8 (85 opiniones)', 3: '4.7 (210 opiniones)' };

  return (
    <DetailWrapper>
      <BackButton onClick={onVolver}>◀ Volver al Menú</BackButton>
      
      <FlexLayout>
        <DishImage src={producto.img} alt={producto.nombre} />
        
        <InfoPane>
          <RatingContainer>
            ★ ★ ★ ★ ★ <span>{notasMock[producto.id] || '4.8 (50 opiniones)'}</span>
          </RatingContainer>
          
          <ProductTitle>{producto.nombre}</ProductTitle>
          <PriceTag>{preciosMock[producto.id] || '$12.000'}</PriceTag>
          
          <ProductDescription>
            {producto.desc} Elaborado al momento empleando materias primas frescas de productores locales. Servido con su guarnición caliente y aderezos artesanales de la casa.
          </ProductDescription>
          
          <PurchaseActions>
            <QuantitySelector>
              <button onClick={() => setCantidad(prev => Math.max(1, prev - 1))}>-</button>
              <span>{cantidad}</span>
              <button onClick={() => setCantidad(prev => prev + 1)}>+</button>
            </QuantitySelector>
            
            <OrderButton>Agregar al Pedido</OrderButton>
          </PurchaseActions>
        </InfoPane>
      </FlexLayout>
    </DetailWrapper>
  );
}
