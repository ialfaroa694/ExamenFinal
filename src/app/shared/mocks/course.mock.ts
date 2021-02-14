/* tslint:disable */
import { ICourseContainer } from '../Interfaces/course';

export const CourseContainerData: ICourseContainer[] = [
    {
        id: 1,
        name: "Angular 10",
        featured: true,
        image: "http://examen-nh.jcramireztello.com/media/books/angular10.png",
        language: "es",
        price: 5000.0,
        duration: 40,
        lessons: 7,
        deadline: "2021-01-09",
        students: 20,
        summary: "Angular es el framework para JavaScript estándar para crear webs SPA. Es uno de los frameworks más populares para desarrollar aplicaciones modernas y escalables en el lado del cliente.\r\nSi quieres ser desarrollador web, o incluso si ya te dedicas al desarrollo web, es casi obligatorio aprender todos los frameworks y tecnologías con las que vamos a trabajar en el curso y sobre todo como combinarlas para crear aplicaciones completas a medida.\r\nAngular versión 10 ha dado un salto de calidad con respecto a las versiones anteriores del framework, como AngularJS. Ahora utilizaremos TypeScript para definir nuestras clases, propiedades y métodos, el código es mucho más limpio y se ha mejorado el funcionamiento general del framework.",
        instructor: 1,
        category: 2
    },
    {
        id: 2,
        name: "Python Avanzado",
        featured: true,
        image: "http://examen-nh.jcramireztello.com/media/books/dajngo.png",
        language: "es",
        price: 8000.0,
        duration: 120,
        lessons: 20,
        deadline: "2021-01-31",
        students: 20,
        summary: "Django es un framework de desarrollo web de código abierto, escrito en Python, que respeta el patrón de diseño conocido como modelo–vista–controlador (MVC). Fue desarrollado en origen para gestionar varias páginas orientadas a noticias de la World Company de Lawrence, Kansas, y fue liberada al público bajo una licencia BSD en julio de 2005; el framework fue nombrado en alusión al guitarrista de jazz gitano Django Reinhardt.\r\n\r\nEn junio de 2008 fue anunciado que la recién formada Django Software Foundation se haría cargo de Django en el futuro.\r\n\r\nLa meta fundamental de Django es facilitar la creación de sitios web complejos. Django pone énfasis en el re-uso, la conectividad y extensibilidad de componentes, el desarrollo rápido y el principio No te repitas (DRY, del inglés Don't Repeat Yourself). Python es usado en todas las partes del framework, incluso en configuraciones, archivos, y en los modelos de datos.",
        instructor: 3,
        category: 2
    },
    {
        id: 3,
        name: "Curso de Diseño UX",
        featured: true,
        image: "http://examen-nh.jcramireztello.com/media/books/ux.jpeg",
        language: "es",
        price: 4500.0,
        duration: 40,
        lessons: 10,
        deadline: "2021-01-09",
        students: 20,
        summary: "El Diseño de Experiencia de Usuario o User Experience Design (UX) es una de las disciplinas del diseño con mayor crecimiento debido a la explosión de emprendimientos con base tecnológica y a la acogida y adopción de smartphones en todo el mundo.\r\n\r\nSe ha convertido en uno de los campos con mayor demanda en la actualidad por entidades públicas y privadas que han adoptado los procesos de diseño para crear herramientas que acerquen a la ciudadanía con las políticas internas y motivar el crecimiento de los ecosistemas de innovación, que a su vez impulsan el crecimiento de sus economías.",
        instructor: 2,
        category: 1
    }
];
