var gulp = require("gulp"),
	minifycss = require("gulp-minify-css"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify"),
	less = require("gulp-less"),
	babel = require("gulp-babel"),
	babelenv = require("@babel/preset-env")

gulp.task("less", () => {
	gulp.src("docs/src/style.less")
		.pipe(less())
		.pipe(minifycss())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("docs/dist"))
})

gulp.task("minifyjs", () =>
	gulp
		.src("docs/src/index.js")
		.pipe(
			babel({
				presets: [babelenv]
			})
		)
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("docs/dist"))
)

gulp.task("watch", function() {
	gulp.watch("docs/src/*.js", ["minifyjs"])
	gulp.watch("docs/src/*.less", ["less"])
})

gulp.task("default", ["less", "minifyjs"])
