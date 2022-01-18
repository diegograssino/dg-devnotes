import { Box, Center, ChakraProvider, Heading, Text } from '@chakra-ui/react';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/700.css';
import Emoji from 'a11y-react-emoji';
import theme from './theme/theme';
// import AddRemoveFunctions from './clase10/AddRemoveFunctions';
import DudasPrimeraClase from './clase1/DudasPrimeraClase';
import Extensiones from './clase1/Extensiones';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={3} backgroundColor="gray.700" color="white">
        <Heading as="h1">
          <Center>
            <Emoji symbol="⚛️" label="react" />
            <Text paddingX={2}>Material adicional - React Js Coderhouse</Text>
            <Emoji symbol="⚛️" label="react" />
          </Center>
        </Heading>
        <Center>Por Diego Grassino (Tutor)</Center>
      </Box>
      <Box backgroundColor="gray.100" paddingY={10}>
        <Box
          marginX={50}
          paddingX={50}
          paddingY={7}
          shadow="md"
          borderWidth="1px"
          borderRadius={10}
          backgroundColor="gray.500"
          color="white"
        >
          <Heading as="h2" size="lg" fontWeight={700}>
            <Center>
              <Emoji symbol="📁" alt="clase 1" />
              <Text paddingLeft={2}>Clase 1 (Repaso)</Text>
            </Center>
          </Heading>
        </Box>

        <DudasPrimeraClase />
        <Extensiones />
        {/* <Heading as="h2" size="xl" fontWeight={700}>
          Clase 10 (Context)
        </Heading>
        <AddRemoveFunctions /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
