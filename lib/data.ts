import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ing09 from '@/public/ing09.png';
import rocket from '@/public/accelerate-svgrepo-com.svg';
import drawing from '@/public/drawing-tablet-svgrepo-com.svg';
import vector from '@/public/vector-svgrepo-com.svg';
import illustration from '@/public/illustration-of-mobile-game-machine-svgrepo-com.svg';

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const xp = [
    {
        img: drawing,
        name: "Drawing",
        role: "Junior Software Engineer",
    },
    {
        img: rocket,
        name: "Rockets",
        role: "spaceX, Blue Origin",
    },
    {
        img: illustration,
        name: "Illustration",
        role: "Junior Software Engineer",
    },
    {
        img: vector,
        name: "G.Designer",
        role: "Junior Software Engineer",
    },
    
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const workExperiences = [
    {
        company: "Tech Innovators Inc.",
        role: "Junior Software Engineer",
        duration: "Jan 2023 - Present",
        responsibilities: [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to define and design new features.",
        "Participated in code reviews and provided constructive feedback.",
        "Implemented unit and integration tests to ensure code quality."
        ]
    },
    {
        company: "NextGen Solutions",
        role: "Junior Software Developer",
        duration: "Jun 2022 - Dec 2022",
        responsibilities: [
        "Assisted in the development of mobile applications using Flutter.",
        "Worked closely with senior developers to troubleshoot and debug issues.",
        "Contributed to the design and implementation of RESTful APIs.",
        "Maintained documentation for software projects."
        ]
    },
    {
        company: "Innovatech",
        role: "Software Engineering Intern",
        duration: "Jan 2022 - May 2022",
        responsibilities: [
        "Supported the development team in building web applications with Angular.",
        "Performed testing and debugging of software applications.",
        "Collaborated with UX/UI designers to improve user experience.",
        "Assisted in the deployment of applications to cloud platforms."
        ]
    },
    {
        company: "CodeCrafters",
        role: "Junior Backend Developer",
        duration: "Jul 2021 - Dec 2021",
        responsibilities: [
        "Developed backend services using Python and Django.",
        "Integrated third-party APIs and services.",
        "Optimized database queries for performance improvements.",
        "Participated in daily stand-up meetings and sprint planning."
        ]
    },
  ]as const;
  

export const projectsData = [
    {
        title: "CorpComment",
        description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;