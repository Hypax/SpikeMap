module.exports = {
  inputFiles: ['<%= _params_.folders.src %>/scss/site.scss'],

  dev: {
    src: ['<%= sass.inputFiles %>'],
    dest: '<%= _params_.folders.dev %>/css/site.css'
  },

  dist: {
    src: ['<%= sass.inputFiles %>'],
    dest: '<%= _params_.folders.temp %>/css/site.css'
  }
};
