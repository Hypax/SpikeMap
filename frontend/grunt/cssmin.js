module.exports = {
  dist: {
    files: {
      '<%= _params_.folders.dist %>/css/site.css' : ['<%= _params_.folders.temp %>/css/site.css']
    }
  }
};
