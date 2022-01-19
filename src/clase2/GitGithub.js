import {
  Badge,
  Box,
  Text,
  Heading,
  Code,
  Link,
  Image,
  Center,
} from '@chakra-ui/react';
// import { FaLink } from 'react-icons/fa';
import Emoji from 'a11y-react-emoji';
import React from 'react';

function GitGithub() {
  return (
    <Box
      marginX={50}
      paddingX={50}
      marginY={10}
      paddingY={7}
      shadow="md"
      borderWidth="1px"
      borderRadius={10}
      backgroundColor="white"
    >
      <Badge variant="solid" colorScheme="green" marginRight={1}>
        <Emoji symbol="⚛️" label="react" /> React JS
      </Badge>
      <Badge variant="solid" colorScheme="purple" marginRight={1}>
        Clase 2
      </Badge>
      <Heading as="h3" size="lg" fontWeight={700} paddingBottom={5}>
        GIT/ GITHUB PARA LA ENTREGA DE DESAFIOS
        <hr />
      </Heading>
      <Text paddingBottom={3}>
        La forma correcta de llevar el proyecto del curso es utilizando git, por
        eso vamos a ver como subir nuestro proyecto a github y como ir
        entregando los desafios en commits individuales.
      </Text>
      <Heading
        as="h4"
        size="md"
        fontWeight={700}
        paddingBottom={2}
        paddingTop={3}
      >
        <Emoji symbol="1️⃣" label="uno" /> Instalar git
      </Heading>
      <Text>
        Lo primero que debemos hacer es chequear si tenemos instalado git, para
        eso utilizaremos la consola nuestro sistema operativo y escribimos lo
        siguiente:
      </Text>
      <Code width="100%" padding={2} marginY={2}>
        git --version
      </Code>
      <Text>
        Si retorna la versión de git que estamos utilizando, entonces ya lo
        tenemos instalado y podemos continuar con el siguiente paso pero no sin
        antes saber que, si utilizo Windows, a partir de ahora debemos utilizar
        git-bash, la consola que viene incluida con git ya que asi evitaremos
        errores. Si no lo tenemos instalado, nos dirigiremos a la{' '}
        <Link color="teal.500" href="https://git-scm.com/downloads" isExternal>
          página oficial de git
        </Link>{' '}
        para descargarlo e instalarlo siguiendo los pasos que se indican para
        cada sistema operativo.
      </Text>
      <Heading
        as="h4"
        size="md"
        fontWeight={700}
        paddingBottom={2}
        paddingTop={3}
      >
        <Emoji symbol="2️⃣" label="dos" /> Instalar Node.js y NPM
      </Heading>
      <Text>
        Luego haremos algo similar pero con Node, verificaremos primero si lo
        tenemos instalado, para eso utilizaremos la consola nuestro sistema
        (recordar que si tenemos Windows, utilizaremos git-bash):
      </Text>
      <Code width="100%" padding={2} marginY={2}>
        node -v
      </Code>
      <Text>
        Si retorna la versión de node que estamos utilizando, entonces ya lo
        tenemos instalado y podemos continuar con el siguiente paso. Si no lo
        tenemos instalado, nos dirigiremos a la{' '}
        <Link
          color="teal.500"
          href="https://nodejs.org/es/download/"
          isExternal
        >
          página oficial de Node
        </Link>{' '}
        y seleccionaremos la versión LTS, siempre es la mas estable, siguiendo
        luego los pasos según el sistema operativo que tengamos.
      </Text>
      <Heading
        as="h4"
        size="md"
        fontWeight={700}
        paddingBottom={2}
        paddingTop={3}
      >
        <Emoji symbol="3️⃣" label="tres" /> Crear un proyecto con
        create-react-app
      </Heading>
      <Text>
        Ahora que tenemos Node instalado tambien tendremos NPM, su gestor de
        paquetes, y lo utilizaremos para{' '}
        <Link
          color="teal.500"
          href="https://es.reactjs.org/docs/create-a-new-react-app.html"
          isExternal
        >
          utilizar create-react-app
        </Link>{' '}
        , una herramienta de los mismos creadores de React con la que podremos
        generar un proyecto pre configurado con todo listo para comenzar. Para
        esto, nuevamente iremos a la consola y escribiremos lo siguiente:
        <Code width="100%" padding={2} marginY={2}>
          npx create-react-app my-app
        </Code>
        Donde my-app es el nombre que le daremos a nuestro proyecto. Un detalle
        muy importante es evitar utilizar espacios y la palabra react en el
        nombre del proyecto.
        <Text />
      </Text>

      <Heading
        as="h4"
        size="md"
        fontWeight={700}
        paddingBottom={2}
        paddingTop={3}
      >
        <Emoji symbol="4️⃣" label="cuatro" /> Enlazar el proyecto con el
        repositorio y subirlo a GitHub
      </Heading>
      <Text>
        Ahora ya tenemos nuestro proyecto creado, pero no lo tenemos subido a{' '}
        <Link color="teal.500" href="https://github.com/" isExternal>
          Github
        </Link>{' '}
        , desde ya que primero debemos crear un cuenta en dicho servicio, una
        vez hecho esto, desde su misma página vamos a crear un repositorio
        haciendo click en el botón de New o Nuevo:
        <Center marginY={3}>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/newrepo1.png`}
            alt="Commit"
          />
        </Center>
        Ingresaremos el nombre del proyecto y, sin modificar ninguna de las
        opciones por defecto, daremos click en Create repository/ Crear
        repositorio.
        <Center marginY={3}>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/newrepo2.png`}
            alt="Commit"
          />
        </Center>
        ¡Felicidades! Acabas de crear tu primero repo pero esta vacío, Github
        nos estará mostrando algunas opciones para subirlo, tomaremos la segunda
        opción ya que tenemos un proyecto existente ya creado, esta nos sugiere
        algunos comando pero primero lo primero, nos dirigiremos a la consola y
        nos aseguramos de estar dentro de la carpeta del proyecto:
        <Code width="100%" padding={2} marginY={2}>
          cd my-app
        </Code>
        Donde my-app es el nombre que le dieron a su proyecto al crearlo. Ahora
        que ya estamos dentro de la carpeta, sí utilizaremos los comandos
        sugeridos por Github:
        <Code width="100%" padding={2} marginY={2}>
          git remote add origin https://github.com/my-user/my-app.git
          <br />
          git branch -M main
          <br />
          git push -u origin main
        </Code>
        Recuerden que Github ya les va a dar todo para copiar y pegar, en este
        ejemplo my-user debería ser su nombre de usuario y my-app el nombre que
        le pusieron al repo. ¡Listo! Ahora ya tenemos nuestro repo enlazado y
        actualizado, y podremos subir todas las actualizaciones que queramos a
        través de la consola.
      </Text>
      <Heading
        as="h4"
        size="md"
        fontWeight={700}
        paddingBottom={2}
        paddingTop={3}
      >
        <Emoji symbol="5️⃣" label="cinco" /> Subir actualizaciones y entregar el
        link al commit
      </Heading>
      <Text>
        A partir de ahora, si queremos subir una actualización a nuestro repo,
        lo cual debemos hacer seguido para tener un mejor control de versiones,
        debemos hacer lo siguiente, siempre desde adentro de la carpeta del
        proyecto:
        <Code width="100%" padding={2} marginY={2}>
          git add --all
          <br />
          git commit -m &quot;Comentario en imperativo de lo nuevo de esta
          version&quot;
          <br />
          git push -u origin main
        </Code>
        Es importante evitar tildes y ñ y que comentemos en imperativo (Agregue,
        modifique o elimine, por ejemplo), ese comentario se mostrará luego en
        el historial de versiones por lo que podré saber que se hizo. Pero,
        ¿Cómo hago para entregar cada desafio individualmente? Cada uno de estas
        actualizaciones o commits tienen un identificador el cual podremos saber
        ingresando a la pagina de nuestro repo y haciendo click donde se muestra
        a continuación:
        <Center marginY={3}>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/commit1.png`}
            alt="Commit"
          />
        </Center>
        <Center marginY={3}>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/commit2.png`}
            alt="Commit"
          />
        </Center>
        <Center marginY={3}>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/commit3.png`}
            alt="Commit"
          />
        </Center>
        Finalmente, entregamos el link de esa misma pagina que va a tener este
        formato:
        <Code width="100%" padding={2} marginY={2}>
          https://github.com/my-user/my-app/commit/identificador
        </Code>
        Y con esto, ya sabemos todo lo necesario de GIT/ Github para poder
        entregar los desafios y el proyecto final!.
      </Text>
    </Box>
  );
}

export default GitGithub;
