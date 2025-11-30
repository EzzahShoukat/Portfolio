/**
 * 👇 EDIT THIS FILE TO UPDATE YOUR WORKS (PROJECTS, COURSES, AND WORKSHOPS)
 * 
 * - Add or modify work entries in the array below
 * - Set type to 'project', 'course', or 'workshop' to distinguish them
 * - Recent Activity section will automatically show the most recent items ordered by date
 * 
 * Timeline (optional):
 * - Add a 'timeline' array to any work entry to show project phases/milestones
 * - Each timeline item should have: week (e.g. 'Week 1', 'Week 2-3', or date), title, and optional description
 * - Timeline only appears on the work detail page if timeline data is provided
 */

export type WorkType = 'project' | 'course' | 'workshop';

export type TimelineItem = {
  week?: string;       // e.g. 'Week 1', 'Week 2-3', or '2024-01-15'
  title: string;
  description?: string;
};

export type Work = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  date: string;        // e.g. '2024-10-01'
  type: WorkType;      // 'project', 'course', or 'workshop'
  imageUrl?: string;   // optional image path in /public or external URL
  githubUrl?: string;
  demoUrl?: string;
  timeline?: TimelineItem[];  // optional timeline for project phases/milestones
};

export const works: Work[] = [
  {
    id: "1",
    title: "Vibe Coding and agentic AI",
    description: "An intensive 4-week course where I designed and shipped multiple AI-powered systems: a collaborative task app, a Cursor AI web app, an n8n multi-agent assistant, and a Make.com automation for supplier research and email workflows. I worked end-to-end on design, prompts, implementation, testing, and deployment.",
    tech: ["Lovable.dev",
      "Firebasestudio",
      "Google Ai studio",
    "Supabase Auth",
    "GitHub",
    "Netlify",
    "Cursor AI",
    "n8n",
    "Make.com",
    "Google Sheets automation",
    "Gmail Automation",
    "Prompt Engineering"],
    date: "2025-11-30",
    type: "course",
    //githubUrl: "https://github.com/example",
    //demoUrl: "https://quickpace.netlify.app/",
    imageUrl: "/course1.jpg",
    // 👇 Example timeline - add this to any work to show project phases
    timeline: [
      {
        week: "Week 1",
        title: "Team task management Web App",
        description: "Designed the UX with wireframes, wrote prompts to define the app, and built a collaborative task management app with authentication, teams, task CRUD, filters, and deployment using Lovable.dev, Supabase, and GitHub. it was deployed via netlify",
      },
      {
        week: "Week 2",
        title: "Cursor AI App development ",
        description:
          "Set up Cursor AI, explored AI agent models and prompt design, and built a Android weather App with a clear server structure, local server or live data fetching and integrating with Android studio, Build FPS web game, and cating apple game via react.js and next.js.",
      },
      {
        week: "Week 3",
        title: "n8n Multi-Agent Personal Assistant",
        description:
          "Orchestrated multiple intelligent agents in n8n: a meta-agent to route requests, a planner using calendar data, a note-taker to summarize transcripts and extract action items, and a task refiner to break goals into steps and timelines. Build and appointment system automation",
      },
      {
        week: "Week 4",
        title: "Make.com Supplier Research & Email Automation",
        description:
          "Automated invoice and certificate generation and Automated an end-to-end supplier sourcing workflow in Make.com: searching suppliers from Google Sheets data, performing background checks, sending automated email inquiries via Gmail, and transferring data for product approval, followed by testing and deployment.",
      },
    ],
  },
  {
    id: "2",
    title: "Image Text Extraction and classification",
    description: "Identification and extraction of text from cosmetics product images and its classification using LSTM",
    tech: ["OpenCV", "LSTM", "NLP"],
    date: "2021-09-20",
    type: "project",
    demoUrl: "https://www.upwork.com/freelancers/~0158e16d9c23546203?p=1470640668685324288",
    imageUrl: "/project1.jpeg",
  },
  {
    id: "3",
    title: "Deep Learning for Object Detection and Recognition",
    description: "A workshop held on data .",
    tech: ["Pandas", "Jupyter"],
    date: "2021-03-05",
    type: "workshop",
    imageUrl: "/workshop1.jpeg",
  },
];

