// Project Card
document.addEventListener("DOMContentLoaded", () => {
    const projectCardsContainer = document.getElementById('project-cards');
    const projectCardTemplate = document.getElementById('project-card-template');
    const readMoreButton = document.getElementById('read-more-button');
  
    // Initialize the Contentful client
    const client = contentful.createClient({
      space: 'kl8apnd4umpz',
      environment: 'master',
      accessToken: 'jSmWC6IGyL-v5wDI1iBHeSYlxARIque20bbfgoM_ZP8'
    });
  
    // Fetch data from Contentful
    client.getEntries({ content_type: 'portfolioProjectsCard' })
      .then(response => {
        const projects = response.items;
        for (let i = 0; i < Math.min(4, projects.length); i++) {
          const project = projects[i];
          const cardClone = document.importNode(projectCardTemplate.content, true);
          cardClone.querySelector('.projectTitle').textContent = project.fields.title;
          cardClone.querySelector('.projectDescription').textContent = project.fields.description;
          cardClone.querySelector('.project-image').src = project.fields.image.fields.file.url;
          cardClone.querySelector('.link').href = project.fields.link;
          projectCardsContainer.appendChild(cardClone);
        }
  
        if (projects.length > 4) {
          readMoreButton.style.display = 'block';
          readMoreButton.addEventListener('click', () => {
            window.location.href = 'allprojectspage.html';
          });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        projectCardsContainer.innerHTML = '<p>Error fetching projects</p>';
      });
  });
  
  const contentful = require('contentful')
  
  const client = contentful.createClient({
    space: 'kl8apnd4umpz',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'jSmWC6IGyL-v5wDI1iBHeSYlxARIque20bbfgoM_ZP8'
  })
  
  client.getEntry('2zNqi1jdaovxPkc9IM2Mmw')
    .then((entry) => console.log(entry))
    .catch(console.error)