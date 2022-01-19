import { Box, Center, Heading, Text } from '@chakra-ui/react';
import Emoji from 'a11y-react-emoji';

function Header() {
  return (
    <Box
      color="white"
      marginX={50}
      paddingX={50}
      paddingY={7}
      shadow="md"
      //   borderWidth="3px"
      //   borderColor="gray.500"
      borderRadius={10}
      backgroundColor="rgba(255, 255, 255, 0.15)"
    >
      <Heading as="h1" paddingBottom={3}>
        <Center>
          <Emoji symbol="🗒️" label="react" />
          <Text paddingX={2}>DevNotes</Text>
          <Emoji symbol="🗒️" label="react" />
        </Center>
      </Heading>
      <Center>
        <Text paddingRight={2}>Material adicional para el curso de</Text>
        <Emoji symbol="⚛️" label="react" />
        <Text paddingLeft={1}> React Js de Coderhouse</Text>
      </Center>
      <Center>Por Diego Grassino (Tutor)</Center>
    </Box>
  );
}

export default Header;
