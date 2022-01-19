import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Link,
  Text,
  Badge,
} from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa';
import Emoji from '../components/Emoji';

function Extensiones() {
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
      <Badge variant="solid" colorScheme="teal" marginRight={1}>
        <Emoji symbol="⚛️" label="react" /> React JS
      </Badge>
      <Badge variant="solid" colorScheme="green" marginRight={1}>
        <Emoji symbol="​​📚​" label="react" /> Clase 1
      </Badge>
      <Heading as="h3" size="lg" fontWeight={700} paddingBottom={5}>
        EXTENSIONES ÚTILES DE VISUAL STUDIO CODE
      </Heading>
      <Text paddingBottom={5}>
        La herramienta más utilizada para el desarrollo de software es Visual
        Studio Code, por eso dejo este listado de extensiones para que puedan
        hacerlo todavia más potente:
        <br />
        <br />
      </Text>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={FaLink} color="gray" />
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
            isExternal
          >
            Snippets para React (estructuras prearmadas de casi todo para que
            escribir codigo sea mas facil y menos de memoria)
          </Link>
        </ListItem>

        <ListItem>
          <ListIcon as={FaLink} color="gray" />
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot"
            isExternal
          >
            Github Copilot (sugiere código a medida que vamos escribiendolo)
          </Link>
        </ListItem>

        <ListItem>
          <ListIcon as={FaLink} color="gray" />
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap"
            isExternal
          >
            Codesnap (para hacer una captura de pantalla de tu codigo y que sea
            profesional)
          </Link>
        </ListItem>

        <ListItem>
          <ListIcon as={FaLink} color="gray" />
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
            isExternal
          >
            Gitlens (para ver quien y cuando modifico cada linea de tu código)
          </Link>
        </ListItem>

        <ListItem>
          <ListIcon as={FaLink} color="gray" />
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
            isExternal
          >
            Prettier (formatea tu código con una estructura muy limpia)
          </Link>
        </ListItem>

        <ListItem>
          <ListIcon as={FaLink} color="gray" />
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
            isExternal
          >
            Auto Rename Tag (para que cuando re escribas una etiqueta de react,
            se renombre automáticamente)
          </Link>
        </ListItem>
      </List>
      <br />
      <Text>
        Este listado se va actualizando constantemente, cualquier sugerencia
        siempre es bienvenida!.
      </Text>
    </Box>
  );
}

export default Extensiones;
