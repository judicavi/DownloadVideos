const gulp = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const connect = require("gulp-connect");

gulp.task("copy", done => {
  gulp.src("./src/index.html").pipe(gulp.dest("./build"));
  done();
});

/*gulp.task("server", done => {
  connect.server({
    root: ["./build"],
    port: 8080
  });
  done();
});*/

gulp.task("build", done => {
  browserify({
    entries: ["./src/app.js"]
  })
    .transform(babelify, {
      global: true,
      plugins: ["@babel/plugin-transform-modules-commonjs"],
      presets: ["@babel/preset-env", "@babel/preset-react"]
    })
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("./build"));
  done();
});

gulp.task("default", gulp.series("copy", "build"));
//gulp.task("default", gulp.series("server"));
