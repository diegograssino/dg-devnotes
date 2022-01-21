import { Container, Center } from '@chakra-ui/react';
import { TailSpin } from 'react-loader-spinner';

function Loader() {
  return (
    <Container w="100vw" h="100vh">
      <Center height={200}>
        <TailSpin color="#FFF" height={80} width={80} ariaLabel="loading" />
      </Center>
    </Container>
  );
}

export default Loader;
