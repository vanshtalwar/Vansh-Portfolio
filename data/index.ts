export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Bachelors in Technology in Computer Science - KCC Institutes",
    description: "Education 2022-2026",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },

];

export const projects = [
  {
    id: 1,
    title: "Task Flow",
    des: "Smart Task Management System built on MERN Stack.",
    img: "/taskflow.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://task-flow-eight-ebon.vercel.app/",
  },
  {
    id: 2,
    title: "Whispyr.io",
    des: "A Real Time Chat Application Build using MERN + Socket.io",
    img: "/whispyr.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://whispyr-io-v2.onrender.com/",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Software Development Engineer",
    desc: "At Xelron AI, I developed Internal Dashboards using MERN Stack and Trained AI Models for Snorkel AI.",
    duration: "Sept 2025 - Present",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    desc: "At TechAivv Technologies, I developed a Modern frontend website for them using React.js",
    duration: "March 2025 - Aug 2025",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/vanshtalwar",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vanshtalwarr/",
  },
];
