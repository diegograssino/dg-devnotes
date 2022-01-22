import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/700.css';
import theme from './theme/theme';
import Header from './components/Header';
import ArticleListContainer from './list/ArticleListContainer';
import ContentContainer from './content/ContentContainer';
import Contact from './components/Contact';
import Info from './components/Info';

function App() {
  // Los otros colores #7900FF, #548CFF
  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient="linear(to-l, #7900FF, #548CFF)" paddingY={3} h="100vh">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ArticleListContainer />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/info" element={<Info />} exact />
            <Route
              path="/category/:id"
              element={<ArticleListContainer />}
              exact
            />
            <Route path="/article/:id" element={<ContentContainer />} exact />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
