export const portofolioContent = [
  {
    id: 1,
    title: 'Info',
    description: [
      {
        greeting: 'Hi there!',
        greeter: 'Ermi here',
        occupation: 'Frontend developer',
        main_profession: 'JavaScript Enthusiast',
        origin: 'Ethiopia',
        resides_in: 'Helsinki, Finland',
      },
    ],
    path: '/contact',
    component: 'Contact',
    iconClassName: 'info large icon__size-adj',
  },
  {
    id: 2,
    title: 'EDUCATION',
    description: [
      {
        diploma: 'Bachelor degree',
        field_of_study: 'Media engineering',
        academy: 'Metropolia University of applied sciences',
      },
      {
        diploma: 'Bachelor degree of art',
        field_of_study: 'Music composition and performance.',
        academy: 'Yared School of Music, AAU.',
      },
    ],
    path: '/education',
    component: 'Education',
    iconClassName: 'student large icon__size-adj',
  },

  {
    id: 3,
    title: 'SKILLS',
    description: [
      {
        set_of_skills: 'JavaScript, CSS/SASS, HTML, jQuery',
        'libs & frameworks': 'ReactJS,Angular/AngulaJS, SailsJS, Cordova',
        'Build tools': 'Browserify, Gulp, Webpack',
        additional: 'Music Composition and arrangements',
        projects: {
          thesis_project: 'Säbämestari mobile app',
          school_project: 'ShutApp, a chat app made with sailJS',
        },
        currently_learning: 'Functional programming',
        links: {
          github: 'https://github.com/boochoo',
          linkedin: 'https://www.linkedin.com/in/ermias-asmelash-54b640aa/',
        },
      },
    ],
    path: '/skills',
    component: 'Skills',
    iconClassName: 'certificate large icon__size-adj',
  },
  {
    id: 4,
    title: 'EXPERIENCES',
    description: [
      {
        status: 'Currently working',
        where: 'Apprix Oy',
        what: 'Frontend Developer',
        year: 'Dec, 2016 - present',
      },
      {
        status: 'Thesis project',
        where: 'Game Refinery',
        what: 'Data visualisation based project with AngularJS',
        year: 'Aug, 2016 - Dec 2016',
      },
      {
        status: 'Internship',
        where: 'Metropolia UAS',
        what: 'Finnish floorball Association cross platform mobile app',
        year: 'Aug, 2015 - Jan 2016',
      },
    ],
    path: '/experience',
    component: 'Experience',
    iconClassName: 'computer large icon__size-adj',
  },
];
