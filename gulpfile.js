const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const uglify = require('gulp-terser');
const concat = require('gulp-concat');
const prefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const browserSync = require("browser-sync").create();



function webserver() {
	browserSync.init({
		// proxy: 'site.dev',
		server: {
			baseDir: "app/"
		},
		notify: false,
		port: 8055,
	});
};

// Styles
function sassBuild() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(plumber({ errorHandler: notify.onError("Sass error: <%= error.message %>") }))
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: [
				'src/scss/',				
			],
			outputStyle: 'expanded',
			sourceMap: false,
			errLogToConsole: true
		}).on('error', sass.logError))
		.pipe(prefixer(['last 5 versions'], { cascade: true }))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('app/css/'))		
		.pipe(gulp.dest('app/css/'))		
		.pipe(browserSync.stream());
};

/*
Минификация js
в gulp.src перечисляется список js файлов в том порядке, в каком указан в index.html
*/
function jsBuild() {
	return gulp.src([
		// 'app/js/index.js',
		// 'app/js/overloads/ws.js',
		// 'app/js/overloads/trans.js',
		// 'app/js/overloads/game.js',
		// 'app/js/overloads/listeners.js',
		// 'app/js/overloads/tirManager.js',
		// 'app/js/main.js'
	])
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js/'))
	.pipe(browserSync.stream());
}


function startWatch() {
	gulp.watch(['src/scss/**/*.scss'], gulp.series(sassBuild));
	// watch('app/js/**/*.js', js);
};


exports.sassBuild = sassBuild;
exports.jsBuild = jsBuild;
exports.webserver = webserver;
exports.startWatch = startWatch;
exports.default = gulp.parallel(sassBuild, webserver, startWatch);