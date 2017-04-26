'use strict';
(function(module) {

var projectsArr = [];

function Project(projectDataObj) {
  this.title = projectDataObj.title;
  this.description = projectDataObj.description;
  this.category = projectDataObj.category;
  this.source = projectDataObj.source;
  this.img = projectDataObj.img;
}

Project.prototype.toHtml = function() {
  var $project = $('#template').html();
  var renderProject = Handlebars.compile($project);
  return renderProject(this);
};

projectsData.map(projectObj => {
  projectsArr.push(new Project (projectObj));
});

projectsArr.map(project => {
  $('.project').append(project.toHtml());
});
module.Project = Project;
})(window);
