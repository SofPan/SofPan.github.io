const PROFESSIONAL = [
  {
    title: "SBA Communications Investor Relations",
    experience: "Frontend Developer | 2022-2023",
    description: "Collaborated with a development team to build and maintain a large-scale, multilingual investor relations platform serving a global audience. Developed custom components and pages within a proprietary CMS, handling complex navigation structures and internationalization requirements.",
    stack: "JavaScript, jQuery, SASS, HTML",
    url: "https://www.sbasite.com/English/overview/default.aspx",
    logo: "/assets/SBA_logo.svg"
  },
  {
    title: "Postal Realty Trust Investor Relations",
    experience: "Frontend Developer | 2022",
    description: "Customized investor relations website including tailored layouts and interactive features to meet client specifications.",
    stack: "JavaScript, jQuery, SASS, HTML",
    url: "https://investor.postalrealtytrust.com/overview/default.aspx",
    logo: "/assets/postal-logo.png"
  }
]

const PROJECTS = [
  {
    title: "MoodLoop - Track Your Moods",
    experience: "Fullstack Web Application | 2026",
    description: "A mood and wellness tracking application that helps users identify patterns in their mental health through daily entries and data visualization.",
    stack: "Typescript, Nextjs, PostgreSQL, Prisma, TailwindCSS",
    url: "https://mood-loop.vercel.app/",
    logo: "/assets/moodLoop_thumb.png"
  },
  {
    title: "MedConnect - Connect Doctors with Patients",
    experience: "Fullstack Web Application | 2024",
    description: "Healthcare platform that streamlines appointment booking by connecting patients with available doctors. Features real-time availability scheduling, user authentication, and appointment management for both patients and healthcare providers.",
    stack: "React, JavaScript, Node, Express, PostgreSQL, TailwindCSS",
    url: "https://github.com/SofPan/MedConnect",
    logo: "/assets/med-bg.jpg"
  },
  {
    title: "Jungle - E-Commerce App",
    experience: "Fullstack Web Application | 2024",
    description: "Full-featured e-commerce platform with product catalog, shopping cart functionality, and Stripe payment integration. Includes an admin dashboard for inventory management and order tracking.",
    stack: "Ruby on Rails, PostgreSQL, Stripe API, Bootstrap",
    url: "https://github.com/SofPan/jungle",
    logo: "/assets/jungle_thumb.png"
  },
  {
    title: "Resource Wall - Collect Learning Resources",
    experience: "Fullstack Web Application | 2024",
    description: "Collaborative resource-sharing platform where users can save, organize, and discover educational content. Includes features for rating resources, categorizing by topic, and commenting to build a community-driven learning library.",
    stack: "React, JavaScript, Node, Express, PostgreSQL, SASS",
    url: "https://github.com/SofPan/jungle",
    logo: "/assets/resource_wall.png"
  }
]

const professional_gallery = document.getElementById('featured_professional');
const project_gallery = document.getElementById('featured_personal');


const populateGallery = (parentDiv, projectArray) => {
  return projectArray.map((project, i) => {
    return parentDiv.innerHTML += `
        <div class="gallery-item fade-in ${i % 2 === 0 ? "left" : "right"}">
          <div>
            <div class="flex gallery-title">
              <h3>${project.title}</h3>
              <!-- <img src="${project.logo}" alt="${project.title}"> -->
            </div>
            <h4>${project.experience}</h4>
            <p>${project.description}</p>
          </div>
          <a rel="noreferrer" target="_blank" href="${project.url}">${project.title.split('-')[0]}</a>
        </div>
      `
  })
}

populateGallery(professional_gallery, PROFESSIONAL);
populateGallery(project_gallery, PROJECTS);

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