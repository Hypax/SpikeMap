module.exports = {
	dev1: ['sass:dev'],
	dev2: ['concat:dev', 'copy:dev'],

	dist1: ['sass:dist', 'concat:dist', 'copy:dist'],
	dist2: ['cssmin', 'uglify:dist']
};
