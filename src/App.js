import { Box, ChakraProvider } from '@chakra-ui/react';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/700.css';
import theme from './theme/theme';
import DudasPrimeraClase from './clase1/DudasPrimeraClase';
import Extensiones from './clase1/Extensiones';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient="linear(to-l, #7900FF, #548CFF)" paddingY={3}>
        <Header />
        {/* <Box
          marginX={50}
          paddingX={50}
          paddingY={7}
          shadow="md"
          borderWidth="1px"
          borderRadius={10}
          // bgGradient="linear(to-l, #7900FF, #548CFF)"
          bgGradient="linear(to-l, #93FFD8, #CFFFDC)"
          color="white"
        >
          <Heading as="h2" size="lg" fontWeight={700}>
            <Center>
              <Emoji symbol="🗒️" alt="clase 1" />
              <Text paddingLeft={2}>Clase 1 (Repaso)</Text>
            </Center>
          </Heading>
        </Box> */}

        <DudasPrimeraClase />

        <Extensiones />
      </Box>
    </ChakraProvider>
  );
}

export default App;
