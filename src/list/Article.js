import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { VscWatch, VscPerson, VscArrowRight } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../database/firebase';
import Badges from '../components/Badges';
import COLORS from '../constants/colors';
import Emoji from '../components/Emoji';

function Article({ article }) {
  const [thumbsUp, setThumbsUp] = useState(article.likes);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  useEffect(() => {
    if (!alreadyLiked && thumbsUp > article.likes) {
      const like = firestore.collection('articles').doc(article.id);
      like.update({
        likes: thumbsUp,
      });
      setAlreadyLiked(true);
    }
  }, [thumbsUp]);

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
        <Link to={`/article/${article.id}`}>
          <Text color={COLORS.quaternary} fontSize="sm">
            Leer articulo completo
          </Text>
        </Link>
        <Text color={COLORS.quaternary} fontSize="sm" paddingTop="1">
          <VscArrowRight />
        </Text>
        <Spacer />
        <Button
          variant={alreadyLiked ? 'solid' : 'outline'}
          colorScheme="teal"
          size="xs"
          fontSize="sm"
          fontWeight="bold"
          rightIcon={<Emoji label="emoji" symbol="👍🏻" />}
          paddingLeft="3"
          onClick={() => {
            setThumbsUp(article.likes + 1);
          }}
        >
          {thumbsUp}
        </Button>
      </Flex>
    </Box>
  );
}

export default Article;
