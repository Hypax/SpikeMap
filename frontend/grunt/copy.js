module.exports = {
  inputFiles: [
    'index.html',
    'partials/*',
    'partials/**/*',
    'images/*',
    'json/*'
  ],

  dev: {
    files: [
      {
        expand: true,
        cwd: '<%= _params_.folders.modules %>/font-awesome/fonts/',
        src: '*',
        dest: '<%= _params_.folders.dev %>/fonts/',
      },
      {
        expand: true,
        cwd: '<%= _params_.folders.src %>/',
        src: ['<%= copy.inputFiles %>'],
        dest: '<%= _params_.folders.dev %>/'
      }
    ]
  },

  dist: {
    files: [
      {
        expand: true,
        cwd: '<%= _params_.folders.modules %>/font-awesome/fonts/',
        src: '*',
        dest: '<%= _params_.folders.dist %>/fonts/',
      },
      {
        expand: true,
        cwd: '<%= _params_.folders.src %>/',
        src: ['<%= copy.inputFiles %>'],
        dest: '<%= _params_.folders.dist %>/'
      }
    ]
  }
}
