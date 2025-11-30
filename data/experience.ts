/**
 * 👇 EDIT THIS FILE TO UPDATE YOUR EXPERIENCE ENTRIES
 * 
 * - Add or modify experience entries in the array below
 * - Each entry should have: id, company, role, location, startDate, endDate, and bullets array
 */

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string; // e.g. 'Jan 2023'
  endDate: string;   // e.g. 'Present' or 'Dec 2023'
  bullets: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "1",
    company: "Creatrixe Solutions Ltd.",
    role: "Software Engineer",
    location: "Islamabad, Pakistan",
    startDate: "March 2022",
    endDate: "October 2022",
    bullets: [
      "Developed and documented RESTful APIs using Swagger.",
      "Basic knowledge of Node.js, MongoDb, Redis for application deployment.",
      "Assisted in data warehouse strategy documentation for an online grocery platform.",
      "Deﬁned scope documents for web applications, outlining technical requirements and timelines.",
    ],
  },
  {
    id: "2",
    company: "Creatrixe Solutions Ltd.",
    role: "Technical Content Writer ",
    location: "Islamabad, Pakistan",
    startDate: "February 2022",
    endDate: "April 2022",
    bullets: [
      "Wrote technical blogs, brochures, and website content on cloud infrastructure.",
      "Utilized WordPress, Hemingway, Grammarly, and Quillbot for content optimization",
    ],
  },
];

