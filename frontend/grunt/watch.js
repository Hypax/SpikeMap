module.exports = {
  dev: {
    files: '<%= _params_.folders.src %>/**',
    tasks: ['dev'],
    options: {
      livereload: true,
    }
  },
  dist: {
    files: '<%= _params_.folders.src %>/**',
    tasks: ['dist'],
    options: {
      livereload: true,
    }
  },
};
