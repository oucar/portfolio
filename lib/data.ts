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

export const experiencesData = [
  {
    title: "Software Engineer II",
    location: "Seismic",
    description: [
     "Will be updated soon."
    ],
    icon: "work",
    date: "9/2024 - present",
  },
  {
    title: "Software Engineer I",
    location: "Bastian Solutions",
    description: [
      "- Applied software design patterns and industry best practices to develop a maintainable, high-quality codebase.",
      "- Developed and maintained web and desktop applications using C#, .NET, NHibernate, and SQL.",
      "- Developed dynamic user interfaces with Vue.js and led Rush-based monorepo projects, integrating custom Vue components via storybooks and enhancing scalability with TypeScript.",
      "- Created and maintained deployment pipelines using Microsoft Azure and Azure Devops.",
      "- Provided on-site customer support during end-to-end and system integration testing to ensure smooth go-live process.",
      "- Addressed support tickets promptly to ensure timely resolutions for customers, while also collaborating closely with the application support, release engineering, and QA teams post-launch.",
    ],
    icon: "work",
    date: "1/2023 - 9/2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Navient",
    description: [
      "- Led the development of Vue.js web applications, prioritizing the creation of reusable UI components and mobile-first design principles. Implemented Vuex to streamline data management processes, ensuring efficient application performance.",
      "- Utilized Dapper as an ORM within backend services and APIs developed using C#, .NET, and SQL to optimize data retrieval and manipulation for enhanced application efficiency.",
      "- Facilitated code reviews and merge requests, ensuring codebase integrity and collaboration.",
      "- Optimized programming procedures with object-oriented principles, enhancing software development efficiency.",
    ],
    icon: "work",
    date: "5/2022 - 12/2022",
  },

  {
    title: "Teaching Assistant",
    location: "Purdue University  ",
    description: [
      "- Used advanced development tools including Git, Vim, Valgrind, and GDB to meticulously identify and rectify diverse software bugs and inefficiencies, with a keen focus on resolving memory leaks and enhancing overall system performance.",
      "- Assessed and graded a multitude of projects authored in C, C++, and Java, delivering comprehensive feedback and guidance to over 60 students, fostering their growth and proficiency in programming concepts.",
      "- Provided assistance to students through personalized debugging sessions and elucidated complex computer science topics such as object-oriented programming, data structures and algorithms, as well as software design principles.",
      "- Facilitated effective communication channels between course instructors, fellow peer leaders, and students to ensure seamless collaboration and support, contributing to the overall success and satisfaction of students.",
    ],
    icon: "work",
    date: "10/2021 - 7/2022",
  },
  {
    title: "Undergraduate Research Assosiate",
    location: "Purdue University  ",
    description: [
      "- Leveraged quantitative analysis tools such as Python, R, SPSS, SAS, and Excel to conduct comprehensive data analysis for diverse university-wide assessment projects, encompassing surveys and research initiatives.",
      "- Translated complex data sets into insightful and actionable insights, crafting accurate and professional reports to aid in strategic decision-making processes.",
      "- Performed qualitative analysis on initiatives spearheaded by the Division of Undergraduate Education and other academic units, utilizing advanced NVivo software to uncover valuable qualitative insights and trends.",
      "- Ensured the precision and integrity of quantitative reports developed by colleagues, meticulously verifying numerical data and providing standard proofreading services for grammar, punctuation, and formatting to maintain high-quality deliverables.",
    ],
    icon: "work",
    date: "8/2020 - 5/2022",
  },
  {
    title: "Purdue University",
    location: "Computer Science BS, Mathematics Minor",
    description: [
      "- Consistently achieved multiple High Honors recognitions throughout my academic journey, reflecting a commitment to excellence and a strong work ethic.",
      "- Served as a Teaching Assistant for several pivotal courses including Computing I, Computing II, College Algebra, and College Trigonometry, demonstrating leadership and expertise in guiding fellow students towards academic success.",
      "- Played an active role in fostering a vibrant academic community as an engaged member of the Computer Science Club at IUPUI, participating in various events, workshops, and initiatives to further my knowledge and contribute to the collective learning experience.",
    ],
    icon: "school",
    date: "8/2019 - 12/2022",
  },
] as const;

export const skillsData = [
  // Programming Languages
  "C/C++",
  "C# (.NET)",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",

  // Frameworks and Libraries
  "NHibernate",
  "Entity Framework",
  "LINQ",
  "React.js",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Redux",
  "Vuex",
  "Tailwind CSS",
  "Framer Motion",

  // Databases
  "SQL",
  "MongoDB",
  "PostgreSQL",

  // Development Tools and Practices
  "Git",
  "TFS",
  "Azure DevOps",
  "Agile",
  "Waterfall",
  "vim",
] as const;
