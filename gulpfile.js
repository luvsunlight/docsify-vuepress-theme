var gulp = require("gulp"),
	minifycss = require("gulp-minify-css"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify"),
	less = require("gulp-less"),
	sourcemap = require("gulp-sourcemaps"),
	babel = require("gulp-babel"),
	babelenv = require("@babel/preset-env")

gulp.task("less", () => {
	gulp.src("docs/src/style.less")
		.pipe(less())
		.pipe(minifycss())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("docs/src"))
		.pipe(gulp.dest("dist"))
})

gulp.task("minifyjs", () =>
	gulp
		.src("docs/src/index.js")
		.pipe(sourcemap.init())
		.pipe(
			babel({
				presets: [babelenv]
			})
		)
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemap.write("../maps"))
		.pipe(gulp.dest("docs/src"))
		.pipe(gulp.dest("dist"))
)

gulp.task("watch", function() {
	gulp.watch("docs/src/*.js", ["minifyjs"])
	gulp.watch("docs/src/*.less", ["less"])
})

gulp.task("default", ["less", "minifyjs"])
