/**
 *   ____
 *  / ___| ___   __ _ ___    _   _
 * | |  _ / _ \ / _` / __|  | |_| |_  ___ _ __  ___ ___
 * | |_| | (_) | (_| \__ \  |  _| ' \/ -_) '  \/ -_|_-<
 *  \____|\___/ \__, |___/   \__|_||_\___|_|_|_\___/__/
 *              |___/
 *
 * This file is part of kristuff/gogs-themes 
 * Copyright (c) 2022 Christophe Buliard  
 */

var gulp            = require('gulp');
var cleanCSS        = require('gulp-clean-css');
var sass            = require('gulp-sass');
var rename          = require('gulp-rename');
var globImporter    = require('sass-glob-importer');
var autoprefixer    = require('gulp-autoprefixer');
var del             = require('del');
var runSequence     = require('gulp4-run-sequence');

gulp.task('clean-dist', function() {
    return del(['dist/**', '!dist'], {force: true})
});

gulp.task('build-css-gogs', function () {
    return gulp.src([
        'src/themes/*.scss', 
    ])
    .pipe(sass({ importer: globImporter() }).on('error', sass.logError))
    .pipe(autoprefixer())    
    .pipe(cleanCSS({compatibility: '*', format: 'beautify'}))
    .pipe(rename({prefix:'kristuff.'}))
    .pipe(gulp.dest('dist'))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(rename({extname: ".min.css"}))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function(err) {
    runSequence(
        ['clean-dist'], 
        ['build-css-gogs'],
        err
    );
});

