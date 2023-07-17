### Lista de Tareas con React
##### Version 1.0 [Github-Tag](https://github.com/luca-cr/mi-app/releases/tag/v1.0)

### Funciones pendientes
- [ ] Resetear input al enviar formulario
- [ ] Guardar tareas en **localstorage**


### Description
Es una app de lista de tareas desarrollada en react. El primer componente "ListaDeTareas" se encuentra en App.js. Este componente contiene 2 componentes hijos:

    1 "Formulario" que tiene una funcion onSubmit={agregarTarea} donde verifica si el input contiene el texto de la tarea a agregar, en caso de ser true crea una variable donde agrega la nueva tarea a un arreglo y despues lo envia al hook useState "setTareas"

    2 "Tarea" este componente se llama con la funcion .map que usa la salida del hook useState, la tarea tiene sus props que son necesarios para el funcionamiento de la app como: id, key, texto,completada, eliminar y completar, estas 2 ultimas contienen funciones que se envian al componente Tarea.js.

Formulario.js:

    Retorna un "form" que contiene un input y un button. El "form" contiene una funcion manejarEnvio que previene la recarga de la pagina al enviar el formulario y envia props que se usan en el componente ListaDeTareas. Input posee un evento onChange que registra los cambios que se hacen en este, se guarda en el hook useState mediante setInput y es usado por la funcion manejarEnvio.

Tarea.js

    Recibe los props del componente ListaDeTareas y crea la nueva tarea. Tiene 2 funciones 1_ marca como realizada al hacer click sobre el texto de la tarea 2_ tiene la funcion de eliminar las tareas, el icono viene de la biblioteca de react-icons, se usa como si fuera un componente y se importa con *import { AiOutlineCloseCircle } from "react-icons/ai";*

### Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
