const PROFESSIONAL = [
  {
    title: "SBA Communications Investor Relations",
    experience: "Frontend Developer | 2022-2023",
    description: "Collaborated with a development team to build and maintain a large-scale, multilingual investor relations platform serving a global audience. Developed custom components and pages within a proprietary CMS, handling complex navigation structures and internationalization requirements.",
    stack: ["JavaScript", "jQuery", "SASS", "HTML"],
    url: "https://www.sbasite.com/English/overview/default.aspx",
    logo: "/assets/SBA_logo.svg"
  },
  {
    title: "Postal Realty Trust Investor Relations",
    experience: "Frontend Developer | 2022",
    description: "Customized investor relations website including tailored layouts and interactive features to meet client specifications.",
    stack: ["JavaScript", "jQuery", "SASS", "HTML"],
    url: "https://investor.postalrealtytrust.com/overview/default.aspx",
    logo: "/assets/postal-logo.png"
  }
]

const PROJECTS = [
  {
    title: "Lanezy - Customizable Kanban",
    experience: "Fullstack Web Application | 2026",
    description: "This project is under construction. I invite you to check back periodically to see my progress! Lanezy is a customizable kanban board, intended for anyone who needs to keep themselves organized, be it a student, a freelancer, or a team.",
    stack: ["Typescript", "Nextjs", "tRPC", "Prisma", "TailwindCSS"],
    url: "",
    logo: "/assets/building.png"
  },
  {
    title: "MoodLoop - Track Your Moods",
    experience: "Fullstack Web Application | 2026",
    description: "A mood and wellness tracking application that helps users identify patterns in their mental health through daily entries and data visualization.",
    stack: ["Typescript", "Nextjs", "PostgreSQL", "Prisma", "TailwindCSS"],
    url: "https://mood-loop.vercel.app/",
    logo: "/assets/moodLoop_thumb.png"
  },
  {
    title: "MedConnect - Connect Doctors with Patients",
    experience: "Fullstack Web Application | 2024",
    description: "Healthcare platform that streamlines appointment booking by connecting patients with available doctors. Features real-time availability scheduling, user authentication, and appointment management for both patients and healthcare providers.",
    stack: ["React", "JavaScript", "Node", "Express", "PostgreSQL", "TailwindCSS"],
    url: "https://github.com/SofPan/MedConnect",
    logo: "/assets/med-bg.jpg"
  },
  {
    title: "Resource Wall - Collect Learning Resources",
    experience: "Fullstack Web Application | 2024",
    description: "Collaborative resource-sharing platform where users can save, organize, and discover educational content. Includes features for rating resources, categorizing by topic, and commenting to build a community-driven learning library.",
    stack: ["React", "JavaScript", "Node", "Express", "PostgreSQL", "SASS"],
    url: "https://github.com/SofPan/jungle",
    logo: "/assets/resource_wall.png"
  }
]

const OTHER_WORK = [
  {
    title: "Ford Motors - Investor Relations",
    type: "Professional Work",
    url: "https://shareholder.ford.com/Home/default.aspx"
  },
  {
    title: "Jungle - E-Commerce App",
    type: "School Project",
    url: "https://github.com/SofPan/jungle"
  }
]

const professional_gallery = document.getElementById('featured_professional');
const project_gallery = document.getElementById('featured_personal');

const other_list = document.getElementById('other_work');

const populateGallery = (parentDiv, projectArray) => {
  return projectArray.map((project) => {
    return parentDiv.innerHTML += `
        <div class="gallery-item fade-in">
          <img class="gallery-thumb" src="${project.logo}" alt="${project.title}">
          <div class="gallery-content">
            <div class="gallery-title">
              <h3>${project.title}</h3>
            </div>
            <h4>${project.experience}</h4>
            <p>${project.description}</p>
            <p>${project.stack.join(" | ")}</p>
            <a rel="noreferrer" target="_blank" href="${project.url}">${project.title.split('-')[0]}</a>
          </div>
        </div>
      `
  })
}

populateGallery(professional_gallery, PROFESSIONAL);
populateGallery(project_gallery, PROJECTS);

const populateOtherWork = (parentDiv, projectArray) => {
  return (parentDiv.innerHTML = `
      <div>
        ${projectArray.map((project) => {
    return `
            <div>
              <a rel="noreferrer" target="_blank" href=${project.url} alt=${project.title}>${project.title} | ${project.type}</a>
            </div>
          `
  }).join("")}
      </div>
    `)
}

populateOtherWork(other_list, OTHER_WORK);

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));