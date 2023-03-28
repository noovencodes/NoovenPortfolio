import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    pythonicon,
    tailwind,
    nodejs,
    vite,
    git,
    javaicon,
    photoshop,
    question,
    python,
    java,
    pinkreact,
    threejs,
    mel,
    ali,
    dad,
    mastermind,
    storyboard,
    pokemon,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Student",
      icon: web,
    },
    {
      title: "Front-end Developer",
      icon: mobile,
    },
    {
      title: "Back-end Developer",
      icon: backend,
    },
    {
      title: "Digital Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Python",
      icon: pythonicon,
    },
    {
      name: "Java",
      icon: javaicon,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
  ];
  
  const experiences = [
    {
      title: "Python",
      company_name: "Udemy + Youtube",
      icon: python,
      iconBg: "#FFFF",
      date: "Summer 2021",
      points: [
        "Learned Python syntax and concepts such as datatypes, conditionals, loops, modules, functions, OOP, classes, and exceptions.",
        "Developed small, individual projects like a BMI calculator, password generator, caesar cipher, and a Blackjack game against the computer using Python's 'random' function.",
        "Enhanced my abilities to problem-solve and think outside the box, in order to identify and eliminate bugs within my code.",
        "Ignited my passion for coding and wanting to create applications that help/entertain people",
      ],
    },
    {
      title: "Java",
      company_name: "ICS3U1 + ICS4U1",
      icon: java,
      iconBg: "#FFFF",
      date: "Summer 2021, Summer 2022",
      points: [
        "Learned Java syntax and concepts such as functions, contitionals, loops, methods, classes, and exceptions.",
        "Learned about the basics of creating and designing GUIs.",
        "Introduced to the fundamentals of data structures and algorithms via recursive functions and sorting logic.",
        "Collaborated with a team of 3 other students to create a fully functional Rock, Paper, Scissors game with original assets and necessary documentation.",
      ],
    },
    {
      title: "React.js",
      company_name: "Youtube",
      icon: pinkreact,
      iconBg: "#FFFF",
      date: "March 2023 - Present",
      points: [
        "Learned the basics of JavaScript, HTML, and CSS.",
        "Consumed and implemented APIs into multiple projects.",
        "Expanded my knowledge on web development and design.",
        "Learned other frameworks alongside React; such as Vite, Three JS, and Node JS. ",
      ],
    },
    {
      title: "What's next..?",
      company_name: "Youtube + Experimentation",
      icon: question,
      iconBg: "#FFFF",
      date: "Future Prospects",
      points: [
        "Continuing my studies in Javascript and web development frameworks (React, Vite, and Next JS).",
        "Learning to work with SQL and document-based databases.",
        "Expanding my knowledge and skills in Python; mainly by learning and developing applications using Django, Flask, and FastAPI.",
        "Learning C# in order to start developing games in Unity.",
        "Participating in game jams and hackathons.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Vanessa is a determined, motivated individual who always delivers her best.",
      name: "Marcus",
      designation: "Dad",
      company: "Vanessa",
      image: dad,
    },
    {
      testimonial:
        "Vanessa is one of the most creative and committed people I know. She’s contributed her artistic talent to numerous projects of mine, all of which have received great success. When she sets her mind to something, she’s an extremely dedicated and hard worker whom inspires those around her. ",
      name: "Melissa",
      designation: "Sister",
      company: "Vanessa",
      image: mel,
    },
    {
      testimonial:
        "The projects that Vanessa undertakes are her absolute passion and she always ensures that they are completed with significant time and effort which surpass any expectations given.",
      name: "Alicia",
      designation: "Friend",
      company: "Vanessa",
      image: ali,
    },
  ];
  
  const projects = [
    {
      name: "Pokécard",
      description:
        "A digital Pokémon encylopedia (using PokéAPI for the data) that allows you to filter by type, search by name, and to see more details on a specific Pokémon.",
      tags: [
        {
          name: "react",
          color: "white-text-gradient",
        },
        {
          name: "vite",
          color: "white-text-gradient",
        },
        {
          name: "css",
          color: "white-text-gradient",
        },
        {
          name: "routing",
          color: "white-text-gradient",
        }
      ],
      image: pokemon,
      source_code_link: "https://github.com/noovencodes/Pokecard",
    },
    {
      name: "ICS4U1",
      description:
        "All of my Java projects from my Gr. 12 Comp Sci course in one place.",
      tags: [
        {
          name: "java",
          color: "white-text-gradient",
        },
        {
          name: "documentation",
          color: "white-text-gradient",
        },
      ],
      image: storyboard,
      source_code_link: "https://github.com/noovencodes/ICS4U1",
    },
    {
      name: "ICS3U1",
      description:
        "All of my Java projects from my Gr. 11 Comp Sci course in one place.",
      tags: [
        {
          name: "java",
          color: "white-text-gradient",
        },
      ],
      image: mastermind,
      source_code_link: "https://github.com/noovencodes/ICS3U1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };