import * as contentful from './node_modules/contentful/dist/contentful.es5.mjs';

// Project Card
document.addEventListener("DOMContentLoaded", () => {
    const projectCardsContainer = document.getElementById('project-cards');
    const projectCardTemplate = document.getElementById('project-card-template');
    const readMoreButton = document.getElementById('read-more-button');
}) 
    // Initialize the Contentful client
    // contentfulIntegration.js

// Set up the Contentful client
const client = contentful.createClient({
  space: 'kl8apnd4umpz',
      environment: 'master',
      accessToken: 'jSmWC6IGyL-v5wDI1iBHeSYlxARIque20bbfgoM_ZP8'
});

// Fetch data from Contentful and render project cards
client.getEntries({ content_type: 'portfolioProjectsCard' })
  .then((response) => {
    const projects = response.items;
    const projectList = document.getElementById('project-cards');
    const template = document.getElementById('project-card-template');

    // Render project cards
    projects.forEach((project) => {
      const cardClone = document.importNode(template.content, true);
      const title = cardClone.querySelector('.projectTitle');
      const description = cardClone.querySelector('.projectDescription');
      const image = cardClone.querySelector('.project-image');
      const link = cardClone.querySelector('.project-link');

      title.textContent = project.fields.projectTitle;
      description.textContent = project.fields.description;
      image.src = project.fields.image.fields.file.url;
      link.href = project.fields.link;

      projectList.appendChild(cardClone);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    projectCardsContainer.innerHTML = '<p>Error fetching projects</p>';
  });
