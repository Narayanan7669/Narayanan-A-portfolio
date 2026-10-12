
window.PORTFOLIO = {

  /* ---- Basic details ---- */
  name: "Narayanan A",
  education: "B.Sc Computer Science (AI & ML)",
  status: "Student / Fresher",
  graduation: "2027",
  intro: "I am a Computer Science student specializing in Artificial Intelligence and Machine Learning. I am building my skills in programming, data analysis, and software development through continuous learning and practical projects. I am looking for entry-level opportunities where I can apply my knowledge, learn from experienced professionals, and grow my career.",

  /* ---- Navigation labels and the ORDER of sections.
         Reorder the words in "order" to reorder the page.
         Allowed: "about", "skills", "projects", "resume", "contact" ---- */
  navHome: "Home",
  order: ["about", "skills", "projects", "resume", "contact"],
  buttons: { projects: "View Projects", preview: "Preview Resume", resume: "Download Resume", contact: "Contact Me" },

  /* ---- Section headings (title shown on the page, label shown in the menu) ---- */
  sections: {
    about:    { nav: "About",    title: "About Me" },
    skills:   { nav: "Skills",   title: "Skills" },
    projects: { nav: "Projects", title: "Projects" },
    resume:   { nav: "Resume",   title: "Resume" },
    contact:  { nav: "Contact",  title: "Contact" }
  },

  /* ---- About Me: each line in [ ] is one paragraph ---- */
  about: [
    "I am pursuing a B.Sc in Computer Science with a specialization in Artificial Intelligence and Machine Learning, and I expect to graduate in 2027.",
    "I enjoy technology and solving problems step by step. I am learning programming with Python and Java, building basic web pages with HTML and CSS, and learning data analysis with Excel, SQL, and Power BI.",
    "My career objective is to start in an entry-level role where I can apply what I have learned, work on practical problems, and keep learning from experienced professionals."
  ],

  /* ---- Skills: add or remove lines. "level" can be "Basic", "Learning",
         "Practising" or "" (empty = no label). ---- */
  skills: [
    { group: "Programming",     items: [ { name: "Python", level: "Basic" }, { name: "Java", level: "Basic" } ] },
    { group: "Web Technologies", items: [ { name: "HTML", level: "Basic" }, { name: "CSS", level: "Basic" } ] },
    { group: "Data Analytics",  items: [ { name: "Microsoft Excel", level: "" }, { name: "SQL", level: "Learning" }, { name: "Power BI", level: "Learning" } ] }
  ],

  /* ---- Projects. status: "Planned", "In Progress" or "Completed".
         Leave github / demo as "" until a real link exists (a disabled button is shown).
         image: put your picture in assets/images/ and change the file name. ---- */
  projects: [
    { title: "AI Resume Job Matching Analyser",
      description: "A project focused on analysing resume information and comparing it with job requirements to identify relevant skills and potential matches.",
      technologies: [], image: "assets/images/project-1.svg", imageAlt: "Placeholder image for the AI Resume Job Matching Analyser project",
      status: "Planned", github: "", demo: "" },
    { title: "AI Interview Preparation System",
      description: "A project intended to help candidates prepare for interviews through role-based preparation and interview practice.",
      technologies: [], image: "assets/images/project-2.svg", imageAlt: "Placeholder image for the AI Interview Preparation System project",
      status: "Planned", github: "", demo: "" },
    { title: "Power BI Data Analysis Dashboard",
      description: "A data analytics project focused on exploring datasets, creating visualizations, and presenting useful insights.",
      technologies: ["Power BI"], image: "assets/images/project-3.svg", imageAlt: "Placeholder image for the Power BI Data Analysis Dashboard project",
      status: "Planned", github: "", demo: "" },
    { title: "Personal Expense Tracker",
      description: "A project idea for organizing expenses and viewing spending summaries.",
      technologies: [], image: "assets/images/project-4.svg", imageAlt: "Placeholder image for the Personal Expense Tracker project",
      status: "Planned", github: "", demo: "" }
  ],
  noTechText: "Technologies: to be decided",

  /* ---- Resume: replace the PDF file, keep the same name (or change "file") ---- */
  resume: {
    intro: "My resume summarizes my education, skills, and projects. A placeholder file is currently in place until my final resume is added.",
    file: "assets/Narayanan_Tech_Resume.pdf",   /* the PDF inside the assets folder */
    downloadName: "assets/Narayanan_Tech_Resume.pdf"      /* file name the visitor receives when downloading */
  },

  /* ---- Contact: replace the placeholders with your real details ---- */
  contact: {
    intro: "I am open to entry-level opportunities. Feel free to reach out.",
    email: "narayanan.7669@gmail.com",
    linkedin:"https://www.linkedin.com/in/narayanan-a-2ab25431a/",
    github: "https://github.com/Narayanan7669",
    leetcode: "https://leetcode.com/u/Narayanan_7660/"
  },

  footer: { text: "All rights reserved.", year: "auto" },   /* "auto" = current year */

  /* ---- Look and feel ---- */
  theme: {
    default: "dark",                       /* "dark" or "light" (visitor's toggle is remembered) */
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
    baseFontSize: "16px",
    headingScale: "1",                     /* 1 = normal, 1.2 = bigger headings */
    cardRadius: "14px",
    buttonRadius: "10px",                  /* "999px" = pill buttons, "2px" = square */
    sectionSpacing: "5rem",                /* space between sections */
    colors: {
      dark:  { bg: "#0b1630", surface: "#12213f", text: "#e8eefc", muted: "#a5b4d4", border: "#24365f", primary: "#4f8ff7", secondary: "#22c55e" },
      light: { bg: "#f6f8fc", surface: "#ffffff", text: "#12203d", muted: "#46567a", border: "#d6deee", primary: "#1d4ed8", secondary: "#15803d" }
    }
  }
};
