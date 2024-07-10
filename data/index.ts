export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Enthusiastic and self-taught Front-End Web Developer with a strong foundation in HTML, CSS, and JavaScript.",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/matrix.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am exploring a new horizon in my professional life.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "The technologies I'm familiar with!",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Engineer, fluent in English, nearly 2 years of web developing experience.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Collaborate with a forward-thinking company where I can actively participate in solving complex problems and developing innovative features. Strong focus on client satisfaction.",
    description: "My Goal!",
    className: "md:col-span-2 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to get in touch?",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Shopping List Web App",
    des: "Web application that enables user registration and seamless shopping list management. With a focus on efficiency and convenience, the application allows you to create, mark, and delete items on your shopping lists.",
    img: "/shopping.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/expressjs.svg", "/mongodb.png"],
    link: "https://shopping-list-reydavid1500.vercel.app/signin",
  },
  {
    id: 2,
    title: "Rumen Restaurant Web Page",
    des: "Landing page that showcases detailed information about the restaurant with an integrated e-commerce platform where users can conveniently place delivery or take-away orders.",
    img: "/rumen.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/nestjs.svg",
      "/mongodb.png",
    ],
    link: "https://rumen-reydavid1500.vercel.app/",
  },
  {
    id: 3,
    title: "Rumen Mobile APP",
    des: "Mobile Restaurant e-commerce platform that is being developed with React Native, using NativeWind for the styles and Expo to cross platform compatibility. Here you can see the source code, deployment will be coming soon.",
    img: "mobileapp.jpg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/nestjs.svg",
      "/mongodb.png",
    ],
    link: "https://github.com/ReyDavid1500/rumen-mobile-app",
  },
  {
    id: 4,
    title: "NextJS DashBoard",
    des: "This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.",
    img: "nextjs.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/postgress.svg"],
    link: "https://nextjs-dashboard-green-rho-88.vercel.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance ReactJS FrontEnd Developer",
    desc: "As a key contributor to a full-stack web development project, I am currently working on a dynamic and user-friendly website for Rumen Carnes Ahumadas. This restaurant and producer of Texas BBQ smoked meats, based in Pucón, Chile, aims to provide a comprehensive online experience for customers.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Entrepreneur",
    desc: "Opened a Restaurant and Food Processing Company dedicated to preparing BBQ Texas smoked meats. As a co-owner I oversee cooking and manufacturing of different products, also selling our portfolio of frozen vacuum sealed smoked meats, cooking animal fats, clarified butter and sauces. Permanent communication with custumers and suppliers. Setting up events to promote our brand and products.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Sales Engineer -- Industry related",
    desc: "Experienced Sales Engineer in diverse industries, including welding, gas applications, and industrial materials.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const certificates = [
  {
    id: 1,
    title: "HTML Y CSS",
    des: " Online Course where I learned the fundamentals of HTML and CSS. Everything between semantic HTML and CSS Grid.",
    href: "/diploma-html-css.pdf",
  },
  {
    id: 2,
    title: "JavaScript",
    des: "The basics and foundation of the language, from data types, arrays methods, functions to promises. A lot of ground was cover in this course.",
    href: "/diploma-basico-javascript.pdf ",
  },
  {
    id: 3,
    title: "React JS",
    des: "Very important concepts were seen in this course. State management, components and props, context creation, built in hooks and how to create custom hooks, using local storage, and more.",
    href: "/diploma-react.pdf",
  },
  {
    id: 4,
    title: "SCRUM",
    des: "Core principles and values that drive Agile development. Key roles within a Scrum team, how they collaborate to deliver exceptional results. Backlog management, how to prioritize and refine user stories for maximum efficiency. Sprint planning meetings and more.",
    href: "/diploma-scrum.pdf",
  },
  {
    id: 5,
    title: "CLEAN CODE JAVASCRIPT",
    des: "Best practices to write a easy to understand, scalable and maintainable JavaScript Code. How to name variables, functions single responsibility, among others.",
    href: "/diploma-javascript-clean-code.pdf",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/ReyDavid1500",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/rdguzmanp/",
  },
];
