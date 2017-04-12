'use strict';

var projectsArr = [];

function Project(projectDataObj) {
  this.title = projectDataObj.title;
  this.description = projectDataObj.description;
  this.category = projectDataObj.cateory;
  this.source = projectDataObj.source;
  this.img = projectDataObj.img;
}

Project.prototype.html = function() {
  var $newProject = $('section.play').clone();
  $newProject.removeClass('play');
  $newProject.find('h3').html(this.title);
  $newProject.find('p').html(this.description);
  $newProject.find('a').attr('href', this.source);
  $newProject.find('img').attr('src', this.img);
  return $newProject.html();
};

projectsData.forEach(function(projectObj) {
  projectsArr.push(new Project (projectObj));
});
