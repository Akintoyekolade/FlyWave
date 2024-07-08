// main.js
var contentful = require('contentful');

var client = contentful.createClient({
    space: 'kl8apnd4umpz',
    accessToken: 'jSmWC6IGyL-v5wDI1iBHeSYlxARIque20bbfgoM_ZP8',
  });


  client.getEntry('2zNqi1jdaovxPkc9IM2Mmw').then(function (entry) {
    // logs the entry metadata
    console.log(entry.sys);
  
    // logs the field with ID title
    console.log(entry.fields.projectTitle);
  });


  client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      if (entry.fields.productTitle) {
        console.log(entry.fields.productTitle);
      }
    });
  });