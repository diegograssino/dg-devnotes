import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Spacer,
  Button,
} from '@chakra-ui/react';
import toast, { Toaster } from 'react-hot-toast';

import { VscWatch, VscPerson, VscArrowLeft } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../database/firebase';
import Badges from '../components/Badges';
import COLORS from '../constants/colors';
import Emoji from '../components/Emoji';

function Content({ content }) {
  const [thumbsUp, setThumbsUp] = useState(content.likes);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  useEffect(() => {
    if (!alreadyLiked && thumbsUp > content.likes) {
      const like = firestore.collection('articles').doc(content.id);
      like.update({
        likes: thumbsUp,
      });
      setAlreadyLiked(true);
      toast.success('¡Gracias por tu like!');
    }
  }, [thumbsUp]);
  return (
    <div>
      <Toaster />
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
        <Badges category={content.category} />
        <Heading as="h3" size="md" fontWeight={700} paddingBottom="2">
          <Text>{content.title.toUpperCase()}</Text>
        </Heading>
        <HStack spacing="0" paddingBottom={1}>
          <Text color={COLORS.secondary} fontSize="xs">
            <VscWatch />
          </Text>
          <Text color={COLORS.secondary} fontSize="xs" paddingRight="2">
            {new Intl.DateTimeFormat('es-AR').format(
              new Date(content.date.seconds * 1000)
            )}
          </Text>
          <Text color={COLORS.quaternary} fontSize="xs" fontWeight="bold">
            <VscPerson />
          </Text>
          <Text color={COLORS.quaternary} fontSize="xs" fontWeight="bold">
            {content.author}
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
              setThumbsUp(content.likes + 1);
            }}
          >
            {thumbsUp}
          </Button>
        </HStack>
        <hr />
        <Text marginY="2" fontSize="sm">
          {content.content}
        </Text>
        <hr />
        <Flex marginTop={2}>
          <Text color={COLORS.quaternary} fontSize="sm" paddingTop="1">
            <VscArrowLeft />
          </Text>
          <Link to="/">
            <Text color={COLORS.quaternary} fontSize="sm">
              Volver al home
            </Text>
          </Link>
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
              setThumbsUp(content.likes + 1);
            }}
          >
            {thumbsUp}
          </Button>
        </Flex>
      </Box>
    </div>
  );
}

export default Content;
