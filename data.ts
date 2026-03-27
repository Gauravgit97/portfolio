import { 
  GitHubLogoIcon, 
  LinkedInLogoIcon, 
  TwitterLogoIcon, 
  EnvelopeClosedIcon, 
  FileTextIcon 
} from "@radix-ui/react-icons";

// Portfolio data types
export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  thumbnail: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: any; // React component type
  color?: string;
  download?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  resumeUrl: string;
  resumeFilename: string;
}

// Personal information
export const personalInfo: PersonalInfo = {
  name: "Gaurav Joshi",
  title: "AI/ML Engineer",
  email: "work.gauravjoshi@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1KEqFQNN4JM7tqzEFQYOHcXRGL8ZoSQ-d/view?usp=sharing",
  resumeFilename: "Gaurav_joshi_Resume.pdf"
};

// Social links data
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Gauravgit97",
    icon: GitHubLogoIcon,
    color: "hover:text-gray-300"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gauravjoc/",
    icon: LinkedInLogoIcon,
    color: "hover:text-blue-400"
  },
  {
    name: "Twitter",
    href: "https://x.com/Joc_Gaurav",
    icon: TwitterLogoIcon,
    color: "hover:text-blue-300"
  },
  {
    name: "Email",
    href: "mailto:work.gauravjoshi@gmail.com",
    icon: EnvelopeClosedIcon,
    color: "hover:text-green-400"
  },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1KEqFQNN4JM7tqzEFQYOHcXRGL8ZoSQ-d/view?usp=sharing",
    icon: FileTextIcon,
    download: "https://drive.google.com/file/d/1KEqFQNN4JM7tqzEFQYOHcXRGL8ZoSQ-d/view?usp=sharing"
  }
];

// Portfolio data
export const skills: string[] = [
    "Python",
    "HTML",
    "CSS",
    "SQL",
    "FastAPI",
    "Flask",
    "Pandas",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Docker",
    "Git"
];

// export const experience: Experience[] = [
//   {
//     role: "Data Engineer Intern",
//     company: "Yatra Online Ltd.",
//     duration: "feb 2025 - sep 2025",
//     description: `
//       Engineered scalable backend services for Dynamic Pricing and Hotel Ranking, directly influencing user search results.||
//       Developed the Yatra Travel Chatbot using FastAPI, Redis, and Dialogflow, reducing support ticket volume by 30%.||
//       Built the CCR internal dashboard with Streamlit and REST APIs to visualize competitive pricing data in real time.||
//       Optimized geospatial data access with PostGIS and Flask to improve hotel search latency.||
//       Designed ETL pipelines using Python, Airflow, and SQL to process 5M+ daily records with 99.9% uptime.||
//       Automated reporting workflows with cron jobs and SMTP, saving more than 15 hours of manual work each week.
//     `
//   }
// ];

export const projects: Project[] = [

    {
    title: "Bird Species Identifier",
    description: "A powerful deep learning model built with Python and TensorFlow, designed to identify 10 bird species quickly and accurately from images.",
    tech: ["Python","Deep Learning", "Flask", "Computer Vision", "Tensorflow"],
    github: "https://github.com/Gauravgit97/Bird-Species-Identifier",
    demo: " ",
    thumbnail: "/bird.jpg"
    },
    {
    title: "Entertainment Buddy",
    description: "Developed a content recommendation system for movies, anime, and TV series using K-Nearest Neighbors (KNN). Built a Streamlit-based web app with an interactive UI for personalized suggestions. Optimized data processing with Pandas and NumPy, ensuring fast and accurate recommendations.",
    tech: ["Python", "Machine Learning", "EDA", "KNN", "Streamlit"],
    github: "https://github.com/Gauravgit97/ML-Projects/tree/main/entertainmentBuddy",
    demo: " ",
    thumbnail: "/recomender.png"
  }
  ,
  {
  title: "heart problem analysis",
  description: "This repository is based on deep learning problem which is solved by Neural Network Classification.",
  tech: ["Python", "Tensorflow", "Deep Learning", "Flask"],
  github: "https://github.com/Gauravgit97/heart_problem",
  demo: " ",
  thumbnail: "/heart.jpg"
  },
  {
    title: "PDF Master",
    description: "Developed a PDF manipulation tool with features like text extraction, image extraction, metadata modification, encryption, decryption, merging, splitting, and annotation. Utilized PyPDF2, PDFMiner, and PIL to efficiently process both text and images within PDFs. Implemented encryption and decryption for enhanced document security.",
    tech: ["Python", "PyPDF2"],
    github: "https://github.com/Gauravgit97/python-projects/blob/main/mini%20project/pdf%20master/pdf_manuplation.py",
    demo: " ",
    thumbnail: "/pdf.png"
  }
];

// Default export for convenience
const data = {
  personalInfo,
  socialLinks,
  skills,
  // experience,
  projects
};

export default data;
