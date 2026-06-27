export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    role: "Co-founder and CEO",
    company: "Clofio",
    period: "May 2023 - Present",
    highlights: [
      "Worked with 50+ global organizations to build robust cloud infrastructure serving millions of end users",
      "Scaled the business to $100K+ ARR, spanning across India, US and EU",
    ],
  },
  {
    role: "Senior Engineering Manager",
    company: "AutoDesk",
    period: "April 2023 - May 2023",
    highlights: [
      "Stood at the cross-road of corporate leadership and entrepreneurship - and went the later way",
    ],
  },
  {
    role: "Engineering Manager",
    company: "Innovaccer",
    period: "August 2021 - April 2023",
    highlights: [
      "Helped build the infrastructure platform for a hyper-growing healthcare unicorn",
      "Worked with a cross-functional team to bootstrap 25+ technologies and deliver matching the business growth",
      "Mentored senior engineers and team leads to cultivate a strong technical leadership pipeline",
    ],
  },
  {
    role: "Engineering Manager",
    company: "Tricentis",
    period: "January 2020 - July 2021",
    highlights: [
      "Managed cross-functional product development teams to deliver enterprise-grade testing and quality assurance solutions",
      "Spearheaded agile methodologies and processes to optimize release cycles and enhance output quality",
    ],
  },
  {
    role: "Software Architect",
    company: "Tricentis",
    period: "April 2018 - December 2019",
    highlights: [
      "Designed robust, scalable architectural systems for enterprise software test automation suites",
      "Partnered with product management and development teams to define long-term technical roadmaps",
    ],
  },
  {
    role: "Team Lead, Solution Engineering",
    company: "Tricentis",
    period: "December 2015 - March 2018",
    highlights: [
      "Led a team of Forward Deployed Engineers to help customers integrate and realize value from our product suite",
      "Fostered a collaborative team environment, mentoring junior devs, and driving continuous technical improvements.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Syntel Ltd.",
    period: "March 2013 - November 2015",
    highlights: [
      "Engineered reliable software modules and integrated them with legacy backend services.",
      "Worked in client-facing environments, delivering solutions ahead of schedule.",
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
}

export const educations: Education[] = [
  {
    institution: "West Bengal University of Technology",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Communication Engineering",
    period: "August 2008 - July 2012",
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Engineering Leadership",
    skills: [
      "R&D Strategy & Scaling",
      "Building Growth Culture",
      "Managing Cross-functional Teams",
      "Mentoring & Career Coaching",
      "Recruitment & Technical On-boarding",
      "Agile/Scrum Coaching",
    ],
  },
  {
    category: "Technical & Architectural",
    skills: [
      "Enterprise Application Architecture",
      "Cloud and AI Strategy",
      "System Scalability & Performance",
      "CI/CD Pipelines & Automation",
      "Technical Roadmap & Design Patterns",
    ],
  },
];
