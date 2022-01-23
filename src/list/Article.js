import { Box, Flex, Heading, HStack, Text, Spacer } from '@chakra-ui/react';
import { VscWatch, VscPerson, VscArrowRight } from 'react-icons/vsc';
import { MdOutlineThumbUp, MdThumbUp } from 'react-icons/md';
import Badges from '../components/Badges';
import COLORS from '../constants/colors';

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
      backgroundColor={COLORS.tertiary}
    >
      <Badges category={article.category} />
      <Heading as="h3" size="md" fontWeight={700} paddingBottom="2">
        <Text>{article.title.toUpperCase()}</Text>
      </Heading>
      <HStack spacing="0" paddingBottom={1}>
        <Text color={COLORS.secondary} fontSize="xs">
          <VscWatch />
        </Text>
        <Text color={COLORS.secondary} fontSize="xs" paddingRight="2">
          {new Intl.DateTimeFormat('es-AR').format(
            new Date(article.date.seconds * 1000)
          )}
        </Text>
        <Text color={COLORS.quaternary} fontSize="xs" fontWeight="bold">
          <VscPerson />
        </Text>
        <Text color={COLORS.quaternary} fontSize="xs" fontWeight="bold">
          {article.author}
        </Text>
      </HStack>
      <hr />
      <Text marginY="2" fontSize="sm">
        {article.description}
      </Text>
      <hr />
      <Flex marginTop={2}>
        <Text color={COLORS.quaternary} fontSize="sm">
          Leer articulo completo
        </Text>
        <Text color={COLORS.quaternary} fontSize="sm" paddingTop="1">
          <VscArrowRight />
        </Text>
        <Spacer />
        <Text color={COLORS.secondary} fontSize="sm" fontWeight="bold">
          5
        </Text>
        <Text
          color={COLORS.secondary}
          fontSize="sm"
          paddingTop="1"
          paddingLeft="1"
        >
          <MdOutlineThumbUp />
        </Text>
        <Text
          color={COLORS.secondary}
          fontSize="sm"
          paddingTop="1"
          paddingLeft="1"
        >
          <MdThumbUp />
        </Text>
      </Flex>
    </Box>
  );
}

export default Article;
