/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Debora Portfolio",
  description:
    "onsidero a la programación como una herramienta de cambio, por eso me gusta trabajar en proyectos que desarrollen sistemas sociales, técnicos sostenibles y escalables para crear impacto.",
  og: {
    title: "Debora Portfolio",
    type: "website",
    url: "https://debora-zarate.com/",
  },
};

//Home Page
const greeting = {
  title: "Hola, soy Débora",
  logo_name: "",

  subTitle:
    "Me gusta la lógica y el arte. Todo en este mundo se puede fundamentar con Datos. Considero a la programación como una herramienta de cambio, por eso me gusta trabajar en proyectos que desarrollen sistemas sociales, técnicos sostenibles y escalables para crear impacto.",
  resumeLink:
    "https://drive.google.com/file/d/1dXZ3NLF4XLpPcYptO_3Oq11I_hq8Bp99/view?usp=sharing",
  portfolio_repository: "https://github.com/deza395/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/deza395",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/debzarate/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:debora.ed.zarate@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Construyo sitios webs resposivos frontend usando React-redux",
        "⚡ Creo aplicaciones backend con Django, Laravel, y node",
        "⚡ Utilizo wordpress para algunos sitios webs responsivos",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Diseño de prototipos para aplicaciones web.",
        "⚡ Personalización de diseños de logotipos y creación de logotipos desde cero",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
    {
      title: "Infraestructura en la nube",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experiencia trabajando en múltiples plataformas en la nube",
        "⚡ Alojamiento y mantenimiento de sitios web junto con la integración de bases de datos",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidad de Buenos aires",
      subtitle: "Licenciatura en ciencia de datos",
      logo_path: "iiitk_logo.png",
      alt_name: "Universidad de Beunos aires",
      duration: "2021 - Presente",
      descriptions: [
        "⚡ Actualmente me encientro estudiando la carrera de ciencia de datos en la universidad de Buenos aires ",
        "⚡ Aparte de eso, realicé  cursos de python orientado a ciencia de datos.",
        "⚡ Estudié ingenieria ambiental en la universidad nacional de san martin donde adquri conocimientos de matematica, fisica, estadistica, quimica y utulice lenguajes de programacion como R, python y Matlab.",
      ],
    },
  ],
};

const courses = {
  courses: [
    {
      descriptions: [
        "⚡En el 2019 realicé mi primer curso de desarrollo web Full Stack y desde ese momento decidí continuar con programación.",
        "⚡Realicé  cursos de progrmación sobre base de datos, marketing digital, react entre otros, ademas de aprender otros lenguajes de manera autodidacta",
        "⚡ Actualmente me Encuentro realizando el curso de Java Full Stack en Codo a Codo Brindado por la Ciudad de Buenos Bires",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Desarrollo full Stack",
      subtitle: "Digital House",
      logo_path: "digitalhouse.png",
      certificate_link:
        "https://drive.google.com/file/d/1Iqfya9zMPHjTwiPHtGmpnzsGEx9FeuYG/view?usp=sharing",
      alt_name: "Digital House",
      color_code: "#8C151599",
    },
    {
      title: "Marketing Digital ",
      subtitle: "Educación IT",
      logo_path: "educacionit.png",
      certificate_link:
        "https://drive.google.com/file/d/17PHYSNdXbKY1jVFjKcq_GNU4_tcJmqzJ/view?usp=sharing",
      alt_name: "marketing digital",
      color_code: "#00000099",
    },
    {
      title: " Master JavaScript",
      subtitle: "Udemy",
      logo_path: "udemy1.png",
      certificate_link:
        "https://drive.google.com/file/d/1ENMNcVVqV7EhnRj6k-fqV5djvkINcv-p/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },

    {
      title: "Google Ads ",
      subtitle: "Educación IT",
      logo_path: "educacionit.png",
      certificate_link:
        "https://drive.google.com/file/d/1Pb6ETf-pU7IMu7ew4oo9_k7onQhjgojG/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Master Django y React ",
      subtitle: "Udemy",
      logo_path: "udemy1.png",
      certificate_link:
        "https://drive.google.com/file/d/1Pb6ETf-pU7IMu7ew4oo9_k7onQhjgojG/view?usp=sharing",
      alt_name: "Django",
      color_code: "#FFBB0099",
    },
    {
      title: "Programación Python",
      subtitle: "UPDN",
      logo_path: "python.png",
      certificate_link:
        "https://drive.google.com/file/d/1Hqejcd1AZgtaiD1OPfSgFVQPU_pWV2OJ/view?usp=sharing",
      alt_name: "python",
      color_code: "#1F70C199",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: " Mis Proyectos",
  description:
    " Mis proyectos utilizan una amplia variedad de herramientas de última tecnología. Tengo  experiencia en crear proyectos frontend y backend.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contacto",
    profile_image_path: "animated_ashutosh.png",
    description:
      " Pueden enviarme un mensaje a mi mail o por telefono, les voy a responder dentro de las 24 horas. Puedo ayudarte con Laravel, React, Base de Datos y ML. Si crees que puedo ayudarte en tus proyectos no dudes en contactarme.",
  },
};

const projectcards = {
  list: [
    {
      title: "Portfolio",
      img_path: "project-06.png",
      description: "Portfolio personal responsivo realizado con reactjs ",
      tags: [
        {
          lang: "react",
          color: "#8700b0",
        },
        {
          lang: "css",
          color: "#4257f5",
        },
        {
          lang: "html",
          color: "#ff4b4b",
        },
      ],
      link: "https://debora-zarate.com/ ",
      code: "https://github.com/deza395/nuevo-portfolio",
      linkcolor: "white",
    },

    {
      title: "Covid-tracker",
      img_path: "news.gif",
      description:
        "Proyecto de datos de Covid-19 en tiempo real. Incluye Mapa interactivo y gráficas.",
      tags: [
        {
          lang: "react",
          color: "yellow",
        },
        {
          lang: "material UI",
          color: "#4257f5",
        },
        {
          lang: "firebase",
          color: "#ff4b4b",
        },
      ],
      link: "https://covid-19-tracker-b9862.web.app/",
      code: "https://github.com/deza395/covid-tracker",

      linkcolor: "white",
    },

    {
      title: "Personal blog",
      img_path: "project-03.png",
      description: "blog personal realizado con Laravel, mysql y javascript",
      tags: [
        {
          lang: "laravel",
          color: "red",
        },
        {
          lang: "javascript",
          color: "yellow",
        },
        {
          lang: "css",
          color: "#4257f5",
        },
        {
          lang: "html",
          color: "#ff4b4b",
        },
      ],
      link: "https://blog.debora-zarate.com",
      code: "https://github.com/deza395/miblog",
      linkcolor: "white",
    },
    {
      title: "Pretty Nails",
      img_path: "voice.gif",
      description:
        "Sitio Web profesional Autoadministrable Realizado con laravel,Javascript y Mysql.",
      tags: [
        {
          lang: "Laravel",
          color: "red",
        },
        {
          lang: "Mysql",
          color: "#004782",
        },
        {
          lang: "Javascript",
          color: "yellow",
        },
        {
          lang: "css",
          color: "#4257f5",
        },
        {
          lang: "html",
          color: "#ff4b4b",
        },
      ],
      link: "https://theprettynails.com/",
      code: "https://github.com/deza395/nailspretty",
      linkcolor: "white",
    },
    {
      title: "Fitness shop",
      img_path: "project-02.png",
      description: "Ecommerce realizado con Djang, React, postgresql.",
      tags: [
        {
          lang: "react",
          color: "#8700b0",
        },
        {
          lang: "python",
          color: "green",
        },
        {
          lang: "heroku",
          color: "pink",
        },
        {
          lang: "sql",
          color: "blue",
        },
      ],

      link: "https://fitnessshop.herokuapp.com/#/",
      code: "https://github.com/deza395/fitness-shop",
      linkcolor: "white",
    },

    {
      title: "Coaching",
      img_path: "news.gif",
      description: "Sitio web realizado con Wordpress,optimización seo",
      tags: [
        {
          lang: "wordpress",
          color: "grey",
        },
        {
          lang: "css",
          color: "#4257f5",
        },
        {
          lang: "html",
          color: "#ff4b4b",
        },
      ],
      link: "https://conversacionesefectivas.com.ar/",
      linkcolor: "white",
    },

    {
      title: "Do it yourself",
      img_path: "news.gif",
      description:
        "Sitio web realizado con Laravel en el marco de Proyecto digital house",
      tags: [
        {
          lang: "laravel",
          color: "red",
        },
        {
          lang: "css",
          color: "#4257f5",
        },
        {
          lang: "html",
          color: "#ff4b4b",
        },
        {
          lang: "javascript",
          color: "yellow",
        },
        {
          lang: "heroku",
          color: "pink",
        },
        {
          lang: "mysql",
          color: "blue",
        },
      ],
      link: "https://diypackaging.herokuapp.com/",
      code: "https://github.com/deza395/diypackaging",

      linkcolor: "white",
    },

    {
      title: "San Carlos",
      img_path: "news.gif",
      description: "Sitio web realizado con wordpress,optimización seo",
      tags: [
        {
          lang: "wordpress",
          color: "grey",
        },
        {
          lang: "css",
          color: "#4257f5",
        },
        {
          lang: "html",
          color: "#ff4b4b",
        },
      ],
      link: "https://sancarloshotelba.com/",

      linkcolor: "white",
    },

    {
      title: "Juegos Mimi",
      img_path: "neural.gif",
      description: "Landing Page responsiva profesional realizada con React.",
      tags: [
        {
          lang: "react",
          color: "#8700b0",
        },
        {
          lang: "css",
          color: "#4257f5",
        },
        {
          lang: "html",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "pink",
        },
      ],
      link: "http://juegosinflablesmimi.site/",
      code: "https://github.com/deza395/mimiLandingPage",
      linkcolor: "white",
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  courses,
  projectcards,
  certifications,
  projectsHeader,
  contactPageData,
};
