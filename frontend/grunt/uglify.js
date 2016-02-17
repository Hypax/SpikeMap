module.exports = {
  dist: {
    options: {
      sourceMap: true,
      sourceMapName: '<%= _params_.folders.dist %>/js/sourcemap.map'
    },
    files: {
      '<%= _params_.folders.dist %>/js/script.js': ['<%= _params_.folders.temp %>/js/script.js']
    }
  }
};
