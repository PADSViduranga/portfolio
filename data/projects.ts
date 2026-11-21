// All project content lives here. Edit this file to change the cards.
export type Project = {
  number: string;
  title: string;
  course: string;
  team: string;
  status: "Live" | "Completed" | "In development";
  summary: string;
  highlights: string[];
  stack: string[];
  github?: string; // add your repo link, e.g. "https://github.com/you/codequest"
  demo?: string; // add a live demo link if you have one
};

export const PROJECTS: Project[] = [
  {
    number: "01",
    title: "CodeQuest",
    course: "Mobile App Development",
    team: "Team of 7",
    status: "In development",
    summary:
      "A puzzle game that teaches programming. Players pick a language, choose a level, read short tips, then solve challenges to earn points and level up.",
    highlights: [
      "Firebase auth with register, login, password reset and a 10-minute guest mode",
      "Player progress analytics and an admin reports view",
      "68 screens designed, with a mascot called Mito",
      "Git workflow: main, develop and 7 feature branches merged by pull request",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Git"],
  },
  {
    number: "02",
    title: "AI Recruitment Platform",
    course: "SE205.3",
    team: "Group project",
    status: "Completed",
    summary:
      "A recruitment and talent management system for posting jobs, applying and managing candidates across four user roles.",
    highlights: [
      "ASP.NET Core 8 Web API in four layers: Core, Infrastructure, Services, API",
      "ASP.NET Identity with JWT role-based access control",
      "Repository, Unit of Work, Factory, Strategy and DI patterns",
      "Documented with Use Case, Class and Deployment UML diagrams",
    ],
    stack: ["C#", "ASP.NET Core 8", "EF Core", "JWT", "React"],
  },
  {
    number: "03",
    title: "Teddy and Gift Heaven",
    course: "CS304.3",
    team: "Project lead · Team of 10",
    status: "In development",
    summary:
      "A shop management web app for a gift store that tracks stock from the shelf to the customer's door.",
    highlights: [
      "Inventory, packing and delivery management modules",
      "Sales and stock reports and analytics",
      "Relational database designed on MySQL",
      "Led a 10-person team: repo setup, task split and proposal",
    ],
    stack: ["MySQL", "SQL", "Web app"],
  },
];
