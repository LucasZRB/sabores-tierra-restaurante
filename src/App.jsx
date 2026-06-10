import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

// Componentes Fijos
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

// Secciones ("Pantallas")
import { Inicio } from "./sections/Inicio/Inicio";
import { Productos } from "./sections/Productos/Productos";
import { Contacto } from "./sections/Contacto/Contacto";
import { Historia } from "./sections/Historia/Historia";
import { DetalleProducto } from "./sections/Productos/DetalleProducto";

function App() {
  const [currentScreen, setCurrentScreen] = useState('inicio');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const verProducto = (producto) => {
    setSelectedProduct(producto);
    setCurrentScreen('detalle-producto');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'inicio':
        return <Inicio />;
      case 'productos':
        return <Productos onSelectCard={verProducto} />;
      case 'contacto':
        return <Contacto />;
      case 'historia':
        return <Historia />;
      case 'detalle-producto':
        return <DetalleProducto producto={selectedProduct} onVolver={() => setCurrentScreen('productos')} />;
      default:
        return <Inicio />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        {renderScreen()}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
