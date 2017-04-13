'use strict';

var projectsArr = [];

function Project(projectDataObj) {
  this.title = projectDataObj.title;
  this.description = projectDataObj.description;
  this.category = projectDataObj.category;
  this.source = projectDataObj.source;
  this.img = projectDataObj.img;
}

Project.prototype.toHtml = function() {
  var $newProject = $('div.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h3').text(this.title);
  $newProject.find('p').html(this.description);
  $newProject.find('a').attr('href', this.source);
  $newProject.find('img').attr('src', this.img);
  return $newProject.html();
};

projectsData.forEach(function(projectObj) {
  projectsArr.push(new Project (projectObj));
});

projectsArr.forEach(function(project) {
  $('.pro').append(project.toHtml());
});
