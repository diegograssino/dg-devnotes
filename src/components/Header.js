import { Box, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Emoji from './Emoji';

function Header() {
  return (
    <Box
      color="white"
      marginX={[2, 5, 25, 50]}
      paddingX={[2, 5, 10]}
      paddingY={[2, 3, 4]}
      shadow="md"
      borderRadius={10}
      backgroundColor="rgba(255, 255, 255, 0.15)"
    >
      <Flex>
        <Link to="/">
          <Heading as="h1" size="md">
            <HStack spacing="1">
              <Emoji symbol="⚛️" label="react" />
              <Text>DevNotes</Text>
              {/* <Emoji symbol="🗒️" label="notebook" /> */}
            </HStack>
          </Heading>
        </Link>
        <Spacer />
        <Link to="/contact">
          <HStack spacing="1">
            <Text fontSize="sm">
              <Emoji symbol="📧" label="contact" />
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Contacto
            </Text>
          </HStack>
        </Link>
      </Flex>
      {/* <Center>Por Diego Grassino (Tutor en Coderhouse)</Center> */}
    </Box>
  );
}

export default Header;
