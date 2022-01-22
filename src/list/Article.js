import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';

function Article({ article }) {
  console.log(article.date);
  return (
    <Box
      marginX={[2, 5, 25, 50]}
      paddingX={[2, 5, 25, 50]}
      marginY={10}
      paddingY={[1, 2, 5, 7]}
      shadow="md"
      borderWidth="1px"
      borderRadius={10}
      backgroundColor="white"
    >
      <Heading as="h3" size="lg" fontWeight={700} paddingBottom={1}>
        {article.title.toUpperCase()}
      </Heading>
      <HStack spacing="1" paddingBottom={2}>
        <Text color="gray.400">
          {new Intl.DateTimeFormat('es-AR').format(
            new Date(article.date.seconds * 1000)
          )}
        </Text>
        <Text color="teal.300">
          <strong>{`por ${article.author}`}</strong>
        </Text>
      </HStack>
      <hr />
      {/* console.log(new Intl.DateTimeFormat('en-US').format(date)); */}
    </Box>
  );
}

export default Article;
