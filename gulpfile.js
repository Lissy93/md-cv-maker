
var gulp    = require('gulp');
var gutil   = require ('gulp-util');
var del     = require('del');
var jade    = require('gulp-jade');
var coffee  = require('gulp-coffee');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var sass    = require('gulp-sass');
var copy    = require('gulp-copy');
var cleanCSS= require('gulp-clean-css');


// Compile Jade views into HTML
gulp.task('views', function() {
    locals = require('./src/locals.json');
    gulp.src('./src/views/*.jade')
        .pipe(jade({locals: locals}))
        .pipe(gulp.dest('./production/'))
});


// Compile CoffeeScript into JS, concat and minify
gulp.task('coffee', function() {
    gulp.src('./src/scripts/**/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./production/js'));
});


// Compile SASS into CSS, concat and minify
gulp.task('sass', function () {
    return gulp.src('./src/styles/basic.sass')
        .pipe(sass().on('error', gutil.log))
        .pipe(concat('styles.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./production/css'));
});


// Copy all static assets to production
gulp.task('assets', function () {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./production/assets'));
});


// Watch source for changes, and run appropriate task
gulp.task('watch', function() {
    gulp.watch('src/views/**/*.jade', ['views'] );
    gulp.watch('src/scripts/**/*.coffee', ['coffee'] );
    gulp.watch('src/styles/**/*.sass', ['sass'] );
    gulp.watch('src/assets/**/*', ['assets'] );
    gulp.watch('src/locals.json', ['build']);
});


// Run tests
gulp.task('test', function(){
    gutil.log(gutil.colors.yellow(
        'No tests have been configured in the gulpfile yet.'
    ));
});


// Copy lib files
gulp.task('lib', function(){
    listOfLibraries = ['node_modules/materialize-css/dist/css/materialize.min.css']
    return gulp
        .src(listOfLibraries)
        .pipe(copy('production/lib'))
});


// Delete production files
gulp.task('clean', function () {
    return del([ 'production' ]);
});


// Build complete project
gulp.task('build', ['clean'], function(){
    gulp.start('views', 'coffee', 'sass', 'assets', 'lib');
    gutil.beep();  // Delete this line if you don't like the sound effects!
});


// Default task - build the project then run tests
gulp.task('default', ['build'], function(){
    gulp.start('test');
});
