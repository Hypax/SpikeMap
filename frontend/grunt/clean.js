module.exports = {
  all: ['<%= _params_.folders.dev %>', '<%= _params_.folders.temp %>', '<%= _params_.folders.dist %>'],
  dev: ['<%= _params_.folders.dev %>'],
  dist: ['<%= _params_.folders.temp %>', '<%= _params_.folders.dist %>'],
};
