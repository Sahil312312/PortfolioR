import { link } from "framer-motion/client";
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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  zoop,
  sharvin,
  codeSoft,
  carrent,
  jobit,
  tripguide,
  express,
  rise,
  keeper,
  search,
  todo,
  blog,
  natours,
  linux,
  GCD,
  leetcode,
  gfg,
  cf
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id:"download",
    title:"Downlaod CV"
  }
];

const services = [
  {
    title: "Front Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "DevOps Developer",
    icon: backend,
  },
  {
    title: "Good Problem Solver",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "linux",
    icon: linux,
  },
  // {
  //   name: "GCD",
  //   icon: GCD,
  // }
];

const experiences = [
  {
    title: "Co-Founder And Engineering",
    company_name: "Zoop",
    icon: zoop,
    iconBg: "#383E56",
    date: "May 2023 - March 2024",
    points: [
      "Developed a MERN stack platform focused on fostering community engagement through peer discovery, scaling to 2500+ users across 10 countries.",
      "uccessfully built and maintained a consistent user base, with around 200 active users engaged regularly from countries like the USA, Germany, and Canada.",
      "ed the development and launch of the ZOOP app (PWA) on Google Play Store using Bubble Wrap, achieving 800+ downloads within the first month.",
      "Implemented real-time chatting, status updates, and social media features using web-sockets technology, resulting in a 40% boost in user engagement.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Sharvin Management Pvt Ltd",
    icon: sharvin,
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "Developing and maintaining web applications various web technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser comyatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: " Web Development Intern ",
    company_name: "Code Soft",
    icon: codeSoft,
    iconBg: "#E6DEDD",
    date: "June 2021 - July 2022",
    points: [
      "Gained hands-on experience in building web applications, improving your proficiency in key technologies and frameworks.",
      "Worked on practical tasks and projects, bridging the gap between theoretical knowledge and real-world application.",
      "Learned to manage assigned tasks efficiently while meeting deadlines and maintaining high standards.",
      "Improved teamwork and communication skills by following instructions and working closely with the team, essential for future professional success.",
    ],
  },
];

const testimonials = [
  {
    platformName: "LEETCODE",
    platform: leetcode,
    platformLink: "https://leetcode.com/u/sahilshrivastava312312/",
  },
  {
    platformName: "GFG",
    platform: gfg,
    platformLink: "https://www.geeksforgeeks.org/user/sahilshrivastava312312/",
  },
  {
    platformName: "Code Forces",
    platform: cf,
    platformLink: "https://codeforces.com/profile/___Sahil",
  },
];

const projects = [
  {
    name: "Rise Bharat",
    description:
      "A dedicated platform can improve the fragmented blue-collar job market by offering verified listings and efficient worker-employer connections.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: rise,
    source_code_link: "https://github.com/Sahil312312/rise-bharat-fd",
    link: "https://rise-bharat-fd-two.vercel.app/",
  },
  {
    name: "Natours App",
    description:
      "A comprehensive tour-selling application with a complete backend featuring advanced functionalities like data aggregation and more.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/Sahil312312/NatoursProject",
    link: "https://github.com/Sahil312312/NatoursProject",
  },
  {
    name: "Search Engine",
    description:
      "Developed a Google search engine clone using React and Redux allows for efficient state management and a responsive user interface, enhancing the user experience. Integrating Web Vitals ensures optimal performance tracking, helping to maintain fast load times and responsiveness.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Google API",
        color: "pink-text-gradient",
      },
    ],
    image: search,
    source_code_link: "https://github.com/Sahil312312/google-search",
    link: "https://sahilgoogle.netlify.app/",
  },
  {
    name: "Keeper",
    description:
      "Google Keeper Clone made using react and basic concepts of react such as React-hooks and prop-drilling.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: keeper,
    source_code_link: "https://github.com/Sahil312312/keeperCLone",
    link: "https://keeper-clone-kappa.vercel.app/",
  },
  {
    name: "To-Do list",
    description:
      "Developed a server-side rendered to-do list application with EJS as the templating engine enables dynamic content rendering. Using MongoDB Atlas for data storage ensures reliable management of tasks, allowing users to seamlessly add, update, and delete items",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Sahil312312/todo",
    link: "https://todo-11tl.onrender.com/",
  },
  {
    name: "Blog Website",
    description:
      "Creating a blog-making website using EJS as the templating engine allows for dynamic content generation without the complexity of a database connection. This setup enables users to create and display blog posts through server-side rendering, ensuring a simple and efficient user experience.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link:
      "https://github.com/Sahil312312/Blog/tree/main/EJS-project",
    link: "https://blog-5wg9.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
