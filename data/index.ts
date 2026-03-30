export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
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
    title: "I'm very flexible with time zone communications",
    description: "",
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
  {
    id: 4,
    title:
      "Bachelors in Technology in Computer Science - KCC Institutes, Greater Noida",
    description: "Education 2022-2026",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Real Time Chat Application using Socket.io",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
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
    link: "https://whispyr-io.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Vansh was a great experience. He delivered the project on time and made sure everything worked smoothly. His attention to detail and problem-solving skills really stood out.",
    name: "Rohit Verma",
    title: "Startup Founder",
  },
  {
    quote:
      "Vansh is very professional and easy to work with. He understood our requirements quickly and built a fast, responsive website that exceeded expectations.",
    name: "Mrityunjay Sharma",
    title: "Product Manager",
  },
  {
    quote:
      "I highly recommend Vansh for any web development work. He communicates clearly, delivers quality code, and ensures the final product is polished and user-friendly.",
    name: "Amit Singh",
    title: "Business Owner",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
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
