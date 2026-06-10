import { GridContainer, SectionTitle, Grid, Card, CardImage, CardContent, CardTitle, CardText } from './Productos.styles';

// Datos estáticos de ejemplo
const MENU_RESTAURANTE = [
  { id: 1, nombre: 'Asado Especial', desc: 'Corte premium madurado a las brasas con papas rústicas.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500' },
  { id: 2, nombre: 'Pasta de la Nonna', desc: 'Tallarines caseros con tuco de cocción lenta y parmesano.', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500' },
  { id: 3, nombre: 'Hamburguesa Ahumada', desc: 'Doble carne, cheddar fundido, bacon y aderezo secreto.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500' },
];

export const Productos = ({ onSelectCard }) => {
  return (
    <GridContainer>
      <SectionTitle>Nuestro Menú</SectionTitle>
      <Grid>
        {MENU_RESTAURANTE.map((plato) => (
          <Card key={plato.id} onClick={() => onSelectCard(plato)}>
            <CardImage img={plato.img} />
            <CardContent>
              <CardTitle>{plato.nombre}</CardTitle>
              <CardText>{plato.desc}</CardText>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </GridContainer>
  );
}
