var gulp = require('gulp');
var xml2json = require('./');

gulp.task('default', function () {
    gulp.src('./sample/*.xml')
        .pipe(xml2json())
        .pipe(gulp.dest('./dist'));
});
