import { Box, ChakraProvider } from '@chakra-ui/react';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/700.css';
import theme from './theme/theme';
import DudasPrimeraClase from './clase1/DudasPrimeraClase';
import Extensiones from './clase1/Extensiones';
import Header from './components/Header';
import GitGithub from './clase2/GitGithub';

function App() {
  // Los otros colores #7900FF, #548CFF
  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient="linear(to-l, #7900FF, #548CFF)" paddingY={3}>
        <Header />
        <DudasPrimeraClase />
        <Extensiones />
        <GitGithub />
      </Box>
    </ChakraProvider>
  );
}

export default App;
