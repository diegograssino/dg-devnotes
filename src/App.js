import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/700.css';
import theme from './theme/theme';
import DudasPrimeraClase from './articles/clase1/DudasPrimeraClase';
import Extensiones from './articles/clase1/Extensiones';
import Header from './components/Header';
import GitGithub from './articles/clase2/GitGithub';

function App() {
  // Los otros colores #7900FF, #548CFF
  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient="linear(to-l, #7900FF, #548CFF)" paddingY={3}>
        <BrowserRouter>
          <Header />
          <DudasPrimeraClase />
          <Extensiones />
          <GitGithub />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
