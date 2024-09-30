# CinemaList Challenge for Metadata

CinemaList es una aplicación de listado de peliculas y series utilizando la api https://www.omdbapi.com/

Cuenta con una vista principal en `\`, una vista de detalle en `\:id` y una página para ver el l istado de favoritos en `/favorites`.

Para acceder a la vista de detalle tendremos que clickar en cuarquier portada del listado.

Para ver el listado de favoritos, tendremos que pulsar en el corazón que encontramos en el header.

Respecto al buscador, siempre hará la busqueda sobre la búsqueda en la api, excepto en la página de favoritos, que la búsqueda será sobre el listado de los propios favoritos.

## Stack tecnológico

- React
- TypeScript
- Vite
- Vitest
- React testing library
- Axios
- Redux toolkit para el estado global (He utilizado esta librería porque lo requería la prueba, como punto de mejora hubiera utilizado Zustand dado que es mas ligera la librería)

## Instrucciones de funcionamiento

Clonamos y accedemos al repositorio

> ```console
>  $ git clone https://github.com/Jommartinez/challenge-metadata.git
>  $ cd challenge-metadata
> ```

En este caso no sería necesario porque a modo demo he dejado el `.env` en el repositorio, pero sino, habría que crear el archivo `.env` con la `VITE_API_KEY`

Instalamos dependencias e iniciamos el proyecto

> ```console
> $ npm install
> $ npm run dev
> ```

Para ejecutar los test utilizamos el siguiente comando

> ```console
> $ npm run test
> ```

Para ejecutar y visualizar el modo compilado de la aplicación

> ```console
> $ npm run build
> $ npm run preview
> ```
