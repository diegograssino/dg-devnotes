import { Box, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { VscMention, VscInfo } from 'react-icons/vsc';
import Emoji from './Emoji';
import COLORS from '../constants/colors';

function Header() {
  return (
    <Box
      bgGradient={`linear(to-l, ${COLORS.gradientBackgroud})`}
      w="full"
      position="fixed"
      zIndex="1100"
    >
      <Box
        backgroundColor={COLORS.navbar}
        color="white"
        paddingX={[4, 10, 20]}
        paddingY={[2, 3, 4]}
      >
        <Flex>
          <Link to="/">
            <Heading as="h1" size="md">
              <HStack spacing="0">
                <Emoji label="emoji" symbol="💻" />
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
