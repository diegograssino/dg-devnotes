import { Box, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { VscSymbolNamespace, VscMention, VscInfo } from 'react-icons/vsc';
import COLORS from '../constants/colors';

function Header() {
  return (
    <Box backgroundColor={COLORS.navbar} w="full" position="fixed">
      <Box
        color="black"
        marginX={[2, 5, 25, 50]}
        paddingX={[2, 5, 10]}
        paddingY={[2, 3, 4]}
        borderRadius={10}
      >
        <Flex>
          <Link to="/">
            <Heading as="h1" size="md">
              <HStack spacing="1">
                <VscSymbolNamespace />
                <Text>DevNotes</Text>
              </HStack>
            </Heading>
          </Link>
          <Spacer />
          <HStack spacing="3">
            <Link to="/info">
              <Box>
                <VscInfo />
              </Box>
            </Link>
            <Link to="/contact">
              <Box fontSize="xl">
                <VscMention />
              </Box>
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
