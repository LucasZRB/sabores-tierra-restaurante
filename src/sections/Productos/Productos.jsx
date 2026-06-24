import { MENU_RESTAURANTE } from '../../api/productos';
import { GridContainer, SectionTitle, Grid, Card, CardImage, CardContent, CardTitle, CardText, Price, CategoryTitle } from './Productos.styles';

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
