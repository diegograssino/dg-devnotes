import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { VscWatch, VscPerson, VscArrowRight } from 'react-icons/vsc';

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
      <Heading as="h3" size="md" fontWeight={700} paddingBottom="2">
        <Text>{article.title.toUpperCase()}</Text>
      </Heading>
      <HStack spacing="0" paddingBottom={1}>
        <Text color="gray.400" fontSize="xs">
          <VscWatch />
        </Text>
        <Text color="gray.400" fontSize="xs" paddingRight="2">
          {new Intl.DateTimeFormat('es-AR').format(
            new Date(article.date.seconds * 1000)
          )}
        </Text>
        <Text color="teal.300" fontSize="xs" fontWeight="bold">
          <VscPerson />
        </Text>
        <Text color="teal.300" fontSize="xs" fontWeight="bold">
          {article.author}
        </Text>
      </HStack>
      <hr />
      <Text marginY="2" fontSize="smd">
        {article.description}
      </Text>
      <hr />
      <Flex marginTop={2} justifyContent="end">
        <Text color="gray.400" fontSize="sm">
          Leer articulo completo
        </Text>
        <Text color="gray.400" fontSize="sm" paddingTop="1">
          <VscArrowRight />
        </Text>
      </Flex>
    </Box>
  );
}

export default Article;
