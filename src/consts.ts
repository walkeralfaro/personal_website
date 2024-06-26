export const SITE_TITLE = 'Walker Alfaro';
export const NOTFOUND_TITLE = '404 | Walker Alfaro';

export const SITE_DESCRIPTION = 'Hi, my name is Walker Alfaro Trelles, this is a little space where share about me :)';
export const SKILLS = [
  {
    "skillTitle": "frontend",
    "skillImage": "/images/skills/Frontend.svg",
    "skillsGroup" : [
      "HTML",
      "CSS / Sass",
      "Javascript / Typescript",
      "React",
    ]
  },
  {
    "skillTitle": "backend",
    "skillImage": "/images/skills/Backend.svg",
    "skillsGroup" : [
      "Node",
      "Express",
      "MondoDB / Mongoose",
      "PHP",
    ]
  },
  {
    "skillTitle": "herramientas",
    "skillImage": "/images/skills/Design.svg",
    "skillsGroup" : [
      "Figma / FigJam",
      "Git / GitHub",
      "VSCode",
      "Postman",
    ]
  },
];
export const PROJECTS = [
  {
    "projectLink": "https://www.frontendmentor.io/profile/WalkerAlfaro",
    "projectImage": "/images/projects/rocket.svg",
    "projectTitle": "frontend mentor challenges",
    "projectDescription": "Retos de programación frontend que ponen a prueba estas habilidades de desarrollo.\nEstos retos fueron resueltos con React, Vue3 o JS vanilla.",
    "projectTechnologies": [
      "html5", "css3", "js", "react", "vue", "sass", "gulp"
    ]
  },
  {
    "projectLink": "http://weatherapp.walkeralfaro.com/",
    "projectImage": "/images/projects/weather.svg",
    "projectTitle": "estación metereológica",
    "projectDescription": "Implementada en una placa ESP8266, mide variables de temperatura, humedad y luminosidad.\nUtiliza el protocolo MQTT (IoT) en su comunicación con el backend.",
    "projectTechnologies": [
      "react", "node", "express", "mongodb", "postman", "styled-component"
    ]
  },
]