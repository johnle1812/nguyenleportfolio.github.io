const projects = [
  {
    href: "https://johnle1812.github.io/Image-Search-Application/",
    image: "images/projects/img-search.png",
    title: "Image Search Application",
  },
  {
    href: "https://johnle1812.github.io/Dice-Roll-Simulator/",
    image: "images/projects/dice-roll-sim.png",
    title: "Dice Roll Simulator",
  },
  {
    href: "https://basic-login-page-7ynq.onrender.com/",
    image: "images/projects/login-page.png",
    title: "Login Page",
  }
];

const progLangs = [
  {
    src: "icons/python.png",
    alt: "python-icon",
    name: "Python",
  }, {
    src: "icons/java.png",
    alt: "java-icon",
    name: "Java",
  }, {
    src: "icons/html.png",
    alt: "html-icon",
    name: "HTML",
  }, {
    src: "icons/text.png",
    alt: "css-icon",
    name: "CSS",
  }, {
    src: "icons/js.png",
    alt: "js-icon",
    name: "JavaScript",
  }, {
    src: "icons/postgresql.png",
    alt: "postgresql-icon",
    name: "PostgreSQL",
  }, {
    src: "icons/nodejs.png",
    alt: "nodejs-icon",
    name: "Node.js",
  }, {
    src: "icons/c-sharp.png",
    alt: "c-sharp-icon",
    name: "C#",
  }, {
    src: "icons/React.png",
    alt: "react-icon",
    name: "React",
  }, {
    src: "icons/Fastify.png",
    alt: "fastify-icon",
    name: "Fastify",
  }, {
    src: "icons/git.png",
    alt: "git-icon",
    name: "Git",
  }, {
    src: "icons/MongoDB.png",
    alt: "mongodb-icon",
    name: "MongoDB",
  }, {
    src: "icons/mysql.png",
    alt: "mysql-icon",
    name: "MySQL",
  }, {
    src: "icons/TypeScript.png",
    alt: "typescript-icon",
    name: "TypeScript",
  }, {
    src: "icons/npm.png",
    alt: "npm-icon",
    name: "NPM",
  }
]

const socialMedia = [
  {
    href: "https://www.linkedin.com/in/nguyen-le-5754072b9/",
    src: "icons/linkedin.png",
    alt: "linkedin-icon",
  }, {
    href: "https://github.com/johnle1812",
    src: "icons/github.png",
    alt: "github-icon",
  }
]



// Projects grid
const projectsGrid = document.getElementById("projects-grid");

let projectHTML = "";

projects.forEach((project) => {
  projectHTML += `
    <div class="project-container">
        <a
          href="${project.href}"
          target="_blank"
        >
          <img
            class="project-image"
            src="${project.image}"
            alt="image-search-app"
          />
          <p class="project-title">${project.title}</p>
        </a>
      </div>
  `;
});

projectsGrid.innerHTML = projectHTML;


// Programming Languages grid
const progLangsContainer = document.getElementById("skills");

let skillsHTML = "";
progLangs.forEach((lang) => {
  skillsHTML += `
    <div class="skill-item">
      <span class="skill-label">${lang.name}</span>
      <img
        class="skill-icons"
        src="${lang.src}"
        alt="${lang.alt}"
        aria-label="${lang.name}"
      />
    </div>
  `
});

progLangsContainer.innerHTML = skillsHTML;

// Social Media links
const socialMediaContainer = document.getElementById("social-media");
let socialMediaHTML = `
  <h3>Social Media</h3>
`;

socialMedia.forEach((media) => {
  socialMediaHTML += `
    <a
      rel="noopener"
      class="social-link"
      target="_blank"
      href="${media.href}"
      ><img
        class="contact-icons"
        src="${media.src}"
        alt="${media.alt}"
    /></a>
  `
})

socialMediaContainer.innerHTML = socialMediaHTML;
