import {
  Box,
  Heading,
  Text,
  List,
  ListIcon,
  ListItem,
  Badge,
} from '@chakra-ui/react';
import { FaQuestionCircle } from 'react-icons/fa';
import Emoji from '../../components/Emoji';

function DudasPrimeraClase() {
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
        PREGUNTAS FRECUENTES
        <hr />
      </Heading>
      <Text paddingBottom={3}>
        En la primera clase es normal que tengamos algunas dudas, por eso
        tenemos esta compilación de preguntas donde, posiblemente, este tu duda
        resuelta:
        <br />
        <br />
      </Text>
      <List spacing={2}>
        <ListItem fontWeight={700}>
          <ListIcon as={FaQuestionCircle} color="green.500" />
          ¿Cómo ingreso al zoom de la clase?
        </ListItem>
        <ListItem>
          Deben ingresar a la plataforma de Coder house
          https://plataforma.coderhouse.com/ loguearse con su usuario y
          contraseña, que les llego al mail oportunamente, y al ingresar al
          curso van a ver el listado de clases, y ahi mismo, un botón para
          unirse al vivo.
        </ListItem>
        <ListItem fontWeight={700}>
          <ListIcon as={FaQuestionCircle} color="green.500" />
          ¿Se graba la clase? ¿Debo grabarla yo? ¿Puedo volver a verla?
        </ListItem>
        <ListItem>
          Sí, la clase la graba el profesor y se sube automaticamente a la
          plataforma, les va a llegar un mensaje al canal del curso cuando ya
          este disponible (generalmente entre 2 y 6 horas), ¡puedo revisarla las
          vecees que quiera!
        </ListItem>
        <ListItem fontWeight={700}>
          <ListIcon as={FaQuestionCircle} color="green.500" />
          ¿Donde puedo ver la clase?
        </ListItem>
        <ListItem>
          En la plataforma van a ir encontrando clase a clase todas las
          grabaciones completas.
        </ListItem>
        <ListItem fontWeight={700}>
          <ListIcon as={FaQuestionCircle} color="green.500" />
          ¿Donde puedo ver el material de la clase?
        </ListItem>
        <ListItem>
          El material tambien lo van a encontrar en la plataforma.
        </ListItem>
        <ListItem fontWeight={700}>
          <ListIcon as={FaQuestionCircle} color="green.500" />
          ¿Tengo que hacer el backend? ¿Puedo hacer mi propio backend? ¿No se
          nada de backend, como voy a hacer?
        </ListItem>
        <ListItem>
          Estas las respondo todas juntas explicandoles como va a ser el
          proyecto, vamos a hacer un e-commerce trabajando fuerte en el front
          con React, no vamos a generar nada en archivos html y si vamos a
          utilizar Javascript porque basicamente React es JS, pero tiene otro
          enfoque y funcionalidades que superan al JS Vainilla. Vamos a utilizar
          Firebase como base de datos y backend, es un servicio cloud de Google
          que podemos consumir directamente, no es complejo y es bastante util,
          es por esto que no hace falta que sepan nada de backend y tampoco
          podremos elegir hacerlo con otra herramienta (salvo que el profesor
          les de el Ok, algo que no suele pasar). Es importante saber que
          tenemos que ajustarnos al contenido, porque el contenido se ajusta a
          los desafios y a las entregas.
        </ListItem>
        <ListItem fontWeight={700}>
          <ListIcon as={FaQuestionCircle} color="green.500" />
          ¿Que pasa si me atraso? ¿Si no pude entregar un desafio? ¿O no pude
          valorar una clase?
        </ListItem>
        <ListItem>
          Ante estos casos es importante que plantees el caso a tu tutor
          inmediatamente asi pueda guiarte.
        </ListItem>
        <ListItem fontWeight={700}>
          <ListIcon as={FaQuestionCircle} color="green.500" />
          ¿Es necesario saber Javascript, HTML o CSS?
        </ListItem>
        <ListItem>
          La respuesta es sí (está en los requisitos previos del curso),
          necesito conocer Javascript, HTML y CSS, no hace falta ser un experto
          ni saber todo esto al 100% (siempre hay lugar para repasos o
          refuerzos) pero debo manejar estas tres tecnologias.
        </ListItem>
        <ListItem fontWeight={700}>
          <ListIcon as={FaQuestionCircle} color="green.500" />
          ¿Que temas de Javascript debería saber o repasar para este curso?
        </ListItem>
        <ListItem>
          Es importante conocer/ repasar metodos de arrays como map, filter,
          find, spread operator, tambien conocer fetch/ axios y async/ await o
          promises.
        </ListItem>
        <ListItem fontWeight={700}>
          <ListIcon as={FaQuestionCircle} color="green.500" />
          ¿Debo saber GIT o tener cuenta en Github para entregar los desafíos?
        </ListItem>
        <ListItem>
          La respuesta es sí, pero no hace falta saber nada muy avanzado, de
          todas formas vas a encontrar en esta guía una explicación de como
          hacerlo.
        </ListItem>
      </List>
      <br />
      <Text>
        Este listado se va actualizando constantemente, si aún seguis con dudas
        contactá a tu tutor para que pueda guiarte!.
      </Text>
    </Box>
  );
}

export default DudasPrimeraClase;
