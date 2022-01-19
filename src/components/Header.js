import { Box, Center, Heading, Text } from '@chakra-ui/react';
import Emoji from './Emoji';

function Header() {
  return (
    <Box
      color="white"
      marginX={[2, 5, 25, 50]}
      paddingX={[2, 5, 25, 50]}
      paddingY={[2, 5, 7]}
      shadow="md"
      //   borderWidth="3px"
      //   borderColor="gray.500"
      borderRadius={10}
      backgroundColor="rgba(255, 255, 255, 0.15)"
    >
      <Heading as="h1" paddingBottom={3}>
        <Center>
          <Emoji symbol="⚛️" label="react" />
          <Text paddingX={2}>DevNotes</Text>
          <Emoji symbol="🗒️" label="notebook" />
        </Center>
      </Heading>
      <Center>Por Diego Grassino (Tutor en Coderhouse)</Center>
    </Box>
  );
}

export default Header;
