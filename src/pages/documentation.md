---
layout: ../layouts/MDLayout.astro
title: "Documentación"
---


## Objetivo 🎯
Esta es mi página web personal, tiene como finalidad darme una presencia en internet, ser una ventana a mis proyectos e ir aprendiendo durante su desarrollo y operación. Sin duda habrán mejoras que requiere en su estado actual y posibles secciones nuevas.

## El Reto 🤺
Las características que debe tener el sitio:
- Resumen de habilidades.
- Resumen y acceso a proyectos.
- Acceso a mis redes sociales profesionales.
- Acceso a mi CV.
- Una sección de contacto.
- Modos oscuro y luminoso.
- Diseño responsivo.
- Visualmente agradable.

## Desarrollo 🧑🏻‍💻
### Tecnologías Utilizadas
- **[Astro](https://astro.build/)** 🚀 - framework MPA
- **[Sass](https://sass-lang.com/)** - css con superpoderes
- **[React](https://react.dev/)** - framework de JS
- **[React-hook-form](https://react-hook-form.com/)** - manejar el estado del formulario
- **[Toastify](https://fkhadra.github.io/react-toastify/introduction/)** - notificaciones en pantalla

### Diseño
- El contenido se elaboró en Notion, resumiendo las secciones que debe tener y su contenido.
- Se diseñaron los wireframes en Figma para **Desktop** y para **Móvil**
- El prototipo en alta fidelidad igualmente se diseño en Figma, se eligieron los colores, íconos, ilustraciones acordes al estilo de la página. El diseño final para **Desktop** como para **Móvil**.
- Se añadió el Tema **Luminoso**.
- Se entrega la guía de estilos que contiene los colores, fuentes y dimensiones.

## Programación 💻
- Se dividió la página en **secciones**, para definir las jerarquías para que la semántica sea la correcta:
- Se define la estructura de estilos en Sass:

```
/
├── src/
│   └── styles/
│        ├── base
│        │    └── sanitize.scss
│        │    └── variables.scss
│        │    └── mixins.scss
│        │    └── globals.scss
│        │    └── light_theme.scss
│        │
│        └── main.scss
└── ...
```
- Se utiliza **sanitize.css** como reset para CSS, esto da mayor compatibilidad con distintos navegadores y permite empezar con un "lienzo en blanco".
- Siguiendo la estructura del proyecto se divide la página en componentes, cada componente contiene su propio estilo Sass.
### Integraciones
- Debido a que Astro es un framework MPA, genera páginas estáticas al momento de compilar, si se desea alguna interactividad se puede hacer mediante scripts ```<script></script>```
- Para interacciones más complejas se pueden utilizar el otros frameworks dentro de lo que Astro llama *Islas*. Componentes aislados que son *hidratados* a medida que se requiere de dicho recurso interactivo. ***En esta página se utiliza React con **Hook-form** para controlar el formulario de contacto.***
```html
<section class="contact" id="contact">
  <h2 class="contact_title">Contacto</h2>
  <Contact client:load contact_api={import.meta.env.CONTACT_API}/>
</section>
```
- Se utiliza la Hook-form porque permite facilmente manejar los errores así como sanitizar el texto ingresado, entregando alertas en tiempo real informando al usuario en qué se está equivocando.
```js
{errors.name?.type === 'required' && <p>El campo es requerido</p>}
{errors.name?.type === 'maxLength' && <p>Máximo 30 letras</p>}
{errors.name?.type === 'minLength' && <p>Mínimo 2 letras</p>}
{errors.name?.type === 'pattern' && <p>Sólo debe contener letras</p>}
```
- Adicionalmente se le agrega la librería **Toastify** que permite mostrar anuncios utilizos cuando se realiza el envio de mensaje de contacto. Y es tan sencillo como agregar su contenedor en componente de react:
```js
<ToastContainer />
```
- Para luego definir las características del mensaje:
```js
export const toastifySuccess = (id: any) => {
  toast.update(id,{ 
    render: 'Mensaje enviado 📬', 
    type: 'success', 
    theme: 'colored',
    isLoading: false,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
}
```
- Los mensaje de envío de contacto son disparados durante la petición **HTTP POST** hacia el backend. Cuando incia el envío en el onSubmit se espera una respuesta del servidor, si es positiva significa que el backend logró enviar el mensaje a la bandeja de entrada del correo electrónico previamente configurado, mostrando un mensaje de **success**, pero si no se pudo enviar por un problema den el backend o en la bandeja de entrada se presentará el mensaje de **error**:

```js
const onSubmit = async ( data: FormData ) => {

    const id = toast.loading('Enviando Mensaje 📨');

    try {
      const response = await createPost(data, contact_api);
      if(response.state === 'OK') {
        toastifySuccess(id);
      }
    } catch (error) {
      toastifyError(id);
    }
  };
```

### Componentes
- La página se dividió en componentes para facilitar su desarrollo y mantenimiento. Se tienen los componentes: **BaseHead** (```<head></head>```), **Header**, **HeaderLink**, **ProjectCard**, **SkillCard**, **Footer**.
- Los componenetes ProjectCard y SkillCard leen su contenido desde un archivo de constantes **consts.ts** en formato JSON, esto es para facilitar la edición del contenido de estos componentes.