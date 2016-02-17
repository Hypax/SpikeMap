module.exports = {
    inputFiles: [
        '<%= _params_.folders.modules %>/jquery/dist/jquery.js',
        '<%= _params_.folders.modules %>/angular/angular.js',
        '<%= _params_.folders.modules %>/angular-route/angular-route.js',
        '<%= _params_.folders.modules %>/bootstrap/js/bootstrap.js',
        '<%= _params_.folders.modules %>/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
	   '<%= _params_.folders.modules %>/ngmap/build/scripts/ng-map.js',
        '<%= _params_.folders.modules %>/raphael/raphael.js',
        '<%= _params_.folders.modules %>/angular-morris-chart/src/angular-morris-chart.js',
        '<%= _params_.folders.src %>/app.js',
        '<%= _params_.folders.src %>/js/carousel-bootstrap.js',
        '<%= _params_.folders.src %>/js/*.js',
        '<%= _params_.folders.src %>/js/modules/*.js',
        '<%= _params_.folders.src %>/js/**/*.js'
        ],

    dev: {
        files: [
            {
                src: ['<%= concat.inputFiles %>'],
                dest: '<%= _params_.folders.dev %>/js/script.js'
            },
            {
                src: ['<%= _params_.folders.src %>/css/*.css', '<%= _params_.folders.dev %>/css/site.css'],
                dest: '<%= _params_.folders.dev %>/css/site.css'
            }
        ]
    },

    dist: {
        files: [
            {
                src: ['<%= concat.inputFiles %>'],
                dest: '<%= _params_.folders.temp %>/js/script.js'
            },
            {
                src: ['<%= _params_.folders.src %>/css/*.css', '<%= _params_.folders.temp %>/css/site.css'],
                dest: '<%= _params_.folders.temp %>/css/site.css'
            }
        ]
    }
};
