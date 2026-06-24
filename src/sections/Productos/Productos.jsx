import { GridContainer, SectionTitle, Grid, Card, CardImage, CardContent, CardTitle, CardText, Price, CategoryTitle } from './Productos.styles';

// Datos estáticos de ejemplo
const MENU_RESTAURANTE = [
  { categoria: 'Especiales de la Casa', items: [
    { id: 1, nombre: 'Asado Especial', desc: 'Corte premium madurado a las brasas con papas rústicas.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500', alt: 'Asado Especial', precio: 45000, rating: 4.8, reviews: 124, destacado: true },
    { id: 2, nombre: 'Pasta de la Nonna', desc: 'Tallarines caseros con tuco de cocción lenta y parmesano.', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500', alt: 'Pasta de la Nonna', precio: 15000, rating: 4.9, reviews: 120, destacado: false },
    { id: 2, nombre: 'Pasta de la Nonna', desc: 'Tallarines caseros con tuco de cocción lenta y parmesano.', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500', alt: 'Pasta de la Nonna', precio: 15000, rating: 4.9, reviews: 120, destacado: false },
  ]},

  { categoria: 'Comidas', items: [
  { id: 3, nombre: 'Hamburguesa Ahumada', desc: 'Doble carne, cheddar fundido, bacon y aderezo secreto.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500', alt: 'Hamburguesa Ahumada', precio: 30000, rating: 4.5, reviews: 95, destacado: false },
  ]},
];

export const Productos = ({ onSelectCard }) => {
  return (
    <GridContainer>
      <SectionTitle>Nuestro Menú</SectionTitle>

      {MENU_RESTAURANTE.map((seccion) => (
        <div key={seccion.categoria}>
          <CategoryTitle>{seccion.categoria}</CategoryTitle>

          <Grid>
            {seccion.items.map((plato) => (
              <Card key={plato.id} onClick={() => onSelectCard(plato)}>
                <CardImage img={plato.img} alt={plato.alt} />
                <CardContent>
                  <CardTitle>{plato.nombre}</CardTitle>
                  <CardText>{plato.desc}</CardText>
                  <Price>${plato.precio.toLocaleString()}</Price>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </div>
      ))}
    </GridContainer>
  );
}
