import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/700.css';
import theme from './theme/theme';
import COLORS from './constants/colors';
import Header from './components/Header';
import ArticleListContainer from './list/ArticleListContainer';
import ContentContainer from './content/ContentContainer';
import Contact from './components/Contact';
import Info from './components/Info';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box bgGradient={`linear(to-l, ${COLORS.gradientBackgroud})`} h="100%">
          <Header />
          <Box
            bgGradient={`linear(to-l, ${COLORS.gradientBackgroud})`}
            // bg={COLORS.primary}
            paddingY="55px"
            h="100%"
          >
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
          </Box>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
