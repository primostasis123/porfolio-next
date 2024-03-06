import React from "react";
import { FaReact } from "react-icons/fa";
import reviewPDFImg from "@/public/reviewpdf.png";

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
] as const;

export const experiencesData = [
  {
    title: "Ring System Development Inc",
    location: "Cebu, Philipines",
    description:
      "I worked as a Lead Software Engineer at a Japanese company's Philippines branch for 8 years.",
    icon: React.createElement(FaReact),
    date: "2014 - 2022",
  },
  {
    title: "Eviden Atos Group",
    location: "Cebu, Philipines",
    description:
      "Currently working as a Software Engineer at Eviden, I am open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ReviewPDF AI",
    description:
      "A SaaS application that allows you to have conversations with any PDF documents. Simply upload your file and start asking questions right away with the power of OpenAI.",
    tags: ["React", "Next.js",  "MySQL", "Tailwind", "Prisma", "AWS RDS", "PayPal", "PineCone", "OpenAI"],
    imageUrl: reviewPDFImg,
    urlpage : "https://www.reviewpdf-ai.com/"
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "C# .NET Core",
  "PHP Laravel",
  "Git",
  "Tailwind",
  "Prisma",
  "Zustand",
  "PostgreSQL",
  "MySQL",
] as const;
