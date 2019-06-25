var gulp = require("gulp"),
	minifycss = require("gulp-minify-css"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify"),
	babel = require("gulp-babel"),
	babelenv = require("@babel/preset-env")

gulp.task("minifycss", () =>
	gulp
		.src("src/style.css")
		.pipe(minifycss())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("dist"))
)

gulp.task("minifyjs", () =>
	gulp
		.src("src/index.js")
		.pipe(
			babel({
				presets: [babelenv]
			})
		)
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("dist"))
)

gulp.task("default", ["minifycss", "minifyjs"])
