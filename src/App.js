import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/700.css';
import theme from './theme/theme';
import Header from './components/Header';
import ArticleListContainer from './list/ArticleListContainer';

function App() {
  // Los otros colores #7900FF, #548CFF
  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient="linear(to-l, #7900FF, #548CFF)" paddingY={3} h="100vh">
        <BrowserRouter>
          <Header />
          <ArticleListContainer />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
