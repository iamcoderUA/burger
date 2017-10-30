const
    gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync').create(),
    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify'),
    del          = require('del'),

    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    csso         = require('gulp-csso'),
    imagemin     = require('gulp-imagemin'),
    normalize    = require('node-normalize-scss'),
    rename       = require('gulp-rename'),        
    replace      = require('gulp-replace'),        
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify');

const paths = {
    root: './prod',

    html:     {
                src: 'src/*.html',
                dest: 'prod/',
    },
    styles:   {
                src: 'src/scss/**/*.scss',
                dest: 'prod/css/',
    },
    scripts:  {
                src: 'src/js/**/*.js',
                dest: 'prod/js/',
    },
    images:   {
                src: 'src/img/{bg,content,icons}/**/*',
                dest: 'prod/img/',
    },
    fonts:    {
                src: 'src/fonts/**/*.*',
                dest: 'prod/fonts/',
    },
    server:    {
                src: 'src/*.php',
                dest: 'prod/',
    },
};

// Development 
function templates() {
    return gulp.src(paths.html.src)
        .pipe(plumber())
        .pipe(notify('Template success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.html.dest));
}

function scss() {
    return gulp.src('./src/scss/main.scss')
        .pipe(plumber())
        .pipe(sass({ includePaths: normalize.includePaths }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(notify('Style success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(notify('Scripts success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.scripts.dest));
}

function plugins() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/owl.carousel/dist/owl.carousel.min.js',
        './node_modules/fancybox/dist/js/jquery.fancybox.min.js',
        './node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
        './node_modules/svg4everybody/dist/svg4everybody.min.js',
        // './src/js/fancybox/dist/jquery.fancybox.js',
    ])
        .pipe(plumber())
        .pipe(concat('plugins.min.js'))
        .pipe(notify('Plugins success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.scripts.dest));
}

function pluginStyles() {
    return gulp.src([
        './node_modules/owl.carousel/dist/assets/owl.carousel.css',
        './node_modules/fancybox/dist/css/jquery.fancybox.min.css',
    ])
        .pipe(plumber())
        .pipe(concat('plugins.min.css'))
        .pipe(notify('pluginStyles success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.styles.dest));
}

function imgMin() {
    return gulp.src(paths.images.src)
        .pipe(plumber())
        .pipe(notify('Image success'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.images.dest));
}

function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(notify('Fonts success'))
        .pipe(gulp.dest(paths.fonts.dest));
}
function php() {
    return gulp.src(paths.server.src)
        .pipe(notify('Server php success'))
        .pipe(gulp.dest(paths.server.dest));
}

function clean() {
	return del(paths.root);
}

function watch() {
	gulp.watch(paths.html.src, templates);
	gulp.watch(paths.styles.src, scss);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, imgMin);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch(paths.server.src, php);
}

function server() {
  browserSync.init({
    server: paths.root,
  });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// Exports
// exports.sprites = sprites;
exports.templates      = templates;
exports.scss           = scss;
exports.scripts        = scripts;
exports.plugins        = plugins;
exports.pluginStyles   = pluginStyles;
exports.imgMin         = imgMin;
exports.fonts          = fonts;
exports.php            = php;
exports.clean          = clean;
exports.watch          = watch;

// Tasks
gulp.task('build', gulp.series(
    clean,
    gulp.parallel(templates, scss, scripts, plugins, pluginStyles, imgMin, fonts, php),
));

gulp.task('default', gulp.series(
    gulp.parallel(templates, scss, scripts, plugins, pluginStyles, php),
	gulp.parallel(watch, server),
));
