/**
 * 👇 EDIT THIS FILE TO UPDATE YOUR SKILL CATEGORIES AND EFFICIENCY
 * 
 * - Add or modify skill categories
 * - Update skill names and efficiency levels
 * - Efficiency can be: 'Beginner', 'Intermediate', 'Advanced', or a percentage like '75%'
 */

export type Skill = {
  id: string;
  name: string;
  efficiency: string; // e.g. 'Beginner', 'Intermediate', 'Advanced' or '75%'
};

export type SkillCategory = {
  id: string;
  name: string;       // e.g. 'Programming & Data'
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "1",
    name: "Programming skills",
    skills: [
      { id: "1", name: "Python", efficiency: "Intermediate" },
      { id: "2", name: "C++", efficiency: "Intermediate" },
      { id: "3", name: "SQL", efficiency: "Intermediate" },
      { id: "4", name: "Java", efficiency: "Intermediate" },
      { id: "5", name: "MATLAB", efficiency: "Intermediate" },
    ],
  },
  {
    id: "2",
    name: "Data Analysis & Visualization",
    skills: [
      { id: "6", name: "Power BI", efficiency: "Intermediate" },
      { id: "7", name: "Looker Studio", efficiency: "Intermediate" },
      { id: "8", name: "Pandas", efficiency: "Intermediate" },
      { id: "9", name: "NumPy", efficiency: "Intermediate" },
    ],
  },
  {
    id: "3",
    name: "Machine Learning",
    skills: [
      { id: "10", name: "TensorFlow", efficiency: "Intermediate" },
      { id: "11", name: "PyTorch", efficiency: "Intermediate" },
      { id: "12", name: "Scikit-learn", efficiency: "Intermediate" },
      { id: "13", name: "Keras", efficiency: "Intermediate" },
      { id: "14", name: "OpenCv", efficiency: "Intermediate" },
      { id: "15", name: "NLTK", efficiency: "Intermediate" },
    ],
  },
  {
    id: "4",
    name: "Tools",
    skills: [
      { id: "16", name: "Visual Studio Code", efficiency: "Intermediate"},
      { id: "17", name: "Docker", efficiency: "Beginner" },
      { id: "18", name: "Google Colab", efficiency: "Intermediate"},
      { id: "19", name: "Git", efficiency: "Intermediate"},
      { id: "19", name: "Anaconda", efficiency: "Intermediate"},
    ],
  },
];

