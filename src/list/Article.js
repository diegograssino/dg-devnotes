import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import Emoji from '../components/Emoji';

function Article({ article }) {
  return (
    <Box
      marginX={[2, 5, 25, 50]}
      paddingX={[2, 5, 25, 50]}
      marginY={4}
      paddingY={[1, 2, 5, 7]}
      shadow="md"
      borderWidth="1px"
      borderRadius={10}
      backgroundColor="white"
    >
      <Heading as="h3" size="lg" fontWeight={700} paddingBottom={1}>
        <Text>{article.title.toUpperCase()}</Text>
      </Heading>
      <HStack spacing="1" paddingBottom={2}>
        <Emoji symbol="📚" label="article" />
        <Text color="gray.400" fontSize="sm">
          {new Intl.DateTimeFormat('es-AR').format(
            new Date(article.date.seconds * 1000)
          )}
        </Text>
        <Text color="teal.300" fontSize="sm" fontWeight="bold">
          {article.author}
        </Text>
      </HStack>
      <hr />
      <Text marginY="2">{article.description}</Text>
      <hr />
      <Flex marginTop={2}>
        <Emoji symbol="➡️" label="arrow" />
        <Text color="gray.400" fontSize="sm">
          Ir al articulo
        </Text>
      </Flex>
    </Box>
  );
}

export default Article;
