import { Spinner, Box } from '@chakra-ui/react';

function Loader() {
  return (
    <Box position="relative" minWidth="100%" minHeight="100vh" height="100%">
      <Box
        position="absolute"
        top="55%"
        left="45%"
        transform="translateY(-50%, -50%)"
      >
        <Spinner size="xl" thickness={4} color="purple.200" label="loading" />
      </Box>
    </Box>

    // <Container minWidth="100%" minHeight="100vh" background={COLORS.navbar}>
    //   <Spinner size="xl" thickness={4} color="purple.400" label="loading" />
    // </Container>
  );
}

export default Loader;
