"use client"

import { ExperienceTimelineView } from "./experience-timeline-view"

export const internships = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    company: "Microsoft",
    duration: "June 2025",
    location: "Online",
    type: "Internship / Training Experience",
    status: "Score: 900/1000",
    description: "Completed Microsoft’s Azure Fundamentals (AZ-900) training and certification program focused on cloud computing concepts, Azure architecture, and cloud governance. Combined theoretical learning with hands-on practical exercises in the Azure cloud environment.",
    responsibilities: [
      "Gained practical understanding of cloud models, Azure services, and deployment models.",
      "Worked through hands-on Azure labs to configure virtual machines, storage, and identity management.",
      "Studied and implemented key principles of cloud security, governance, and cost management.",
      "Passed the official Microsoft certification exam with a score of 900 / 1000."
    ],
    achievements: [
      "Earned Microsoft Certified: Azure Fundamentals (AZ-900) credential",
      "Score: 900/1000, Verified Credential: Cx35-Dw8X",
    ],
    technologies: [
      "Microsoft Azure Portal",
      "Azure Resource Manager (ARM)",
      "Azure Virtual Machines (VMs)",
      "Azure Storage (Blob, Table, File, Queue)",
      "Azure Networking (VNet, NSG, Load Balancer)",
      "Azure Active Directory (AAD)",
      "Azure Cost Management & Governance Tools",
    ],
    skills: [
      "Cloud Computing Fundamentals",
      "Azure Service Management",
      "Virtualization & Resource Deployment",
      "Identity & Access Management",
      "Cloud Security & Governance",
      "Cost Optimization",
      "Cloud Architecture Design Principles",
      "Problem Solving & Technical Analysis",
    ],
  },
  {
    title: "Website Designing and Website Development Internship",
    company: "Vishal Global Tech",
    duration: "January - February 2025",
    location: "Greater Noida, India",
    type: "Internship",
    status: "Successfully Completed",
    description:
      "Completed a 3-week internship focused on full-stack web development, contributing to the design, development, and deployment of a live web application. Gained hands-on experience in real-world development environments and applied best practices of the Software Development Life Cycle (SDLC).",
    responsibilities: [
      "Designed and developed responsive web pages using HTML5, CSS3, and JavaScript.",
      "Integrated dynamic content and server communication using Web APIs.",
      "Managed and queried databases using SQL Server.",
      "Followed all phases of the SDLC — including planning, requirement analysis, design, coding, testing, deployment, and maintenance.",
      "Collaborated with the technical team to enhance website functionality and optimize user experience.",],
    achievements: [
      "Successfully contributed to the live project indelhincr.com",
      "Improved website responsiveness and performance by implementing optimized CSS and JavaScript techniques.",
      "Gained practical exposure to real-time project workflows and deployment processes.",
      "Gained industry-standard development experience",
      "Received mentorship from experienced developers",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs", "SQL Server", "Git"],
    skills: ["Web Development", "UI/UX Design", "Database Management", "SDLC", "Problem Solving", "Code Optimization", "Team Collaboration"],
    projects: [
      {
        id: 1,
        name: "indelhincr",
        description:
          "Contributed to the live website indelhincr.com by implementing responsive layouts, optimizing asset delivery, and improving cross-browser compatibility. Worked on frontend enhancements and collaborated on deployment configurations.",
        link: "https://www.indelhincr.com/",
      },
    ],
  },
  {
    title: "Web Development Internship",
    company: "My Job Grow (in collaboration with IIT Bombay)",
    duration: "OCT - DEC 2024",
    location: "Hybrid (Online + Live Projects)",
    type: " MERN Full Stack",
    status: "Completed with Excellence",
    description:
      "Advanced full-stack development internship in collaboration with Techfest IIT Bombay. Focused on building complex web applications with modern technologies and achieved exceptional performance recognition.",
    responsibilities: [
      "Developed and maintained responsive, user-friendly web applications using MERN stack",
      "Implemented responsive UI/UX designs with modern frameworks",
      "Collaborated with cross-functional teams on project delivery",
      "Participated in code reviews and technical discussions",
      "Delivered projects with exceptional quality and performance",
      "Deployed web applications on Netlify and Render, managing environment configurations and version control via GitHub.",
    ],
    achievements: [
      "Earned “Outstanding Achievement” recognition for exceptional project performance and dedication.",
      "Successfully completed all assigned projects with positive feedback from mentors",
      "Built and deployed two production-ready web projects:",
      "Demonstrated strong problem-solving skills",
      "Received official Course & Internship Completion Certificates from My Job Grow",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind CSS", "Git", "Agile", "HTML5", "CSS3"],
    skills: ["MERN Full Stack Development", "Analytical Thinking & Problem Solving", "Project Management", "Responsive UI Design", "Debugging and Continuous Learning Mindset"],
    projects: [
      {
        id: 1,
        name: "trackmyexpensess",
        description:
          "A comprehensive expense tracking web application with user authentication, real-time data visualization, and budget management features. ",
        link: "https://trackmyexpensess.netlify.app/",
      },
      {
        id: 2,
        name: "chatbox-frontend",
        description:
          "A chat application with user authentication, real-time messaging, and group chat features.",
        link: "https://chatbox-frontend.netlify.app/",
      },]
  },
]

export function InternshipDetails() {
  return <ExperienceTimelineView items={internships} />
}
