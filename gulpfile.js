const gulp = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const connect = require("gulp-connect");

const isBuild = process.argv.includes("--build");
const isStart = process.argv.includes("--start");
const isWatch = process.argv.includes("--watch");

gulp.task("copy", done => {
  gulp.src("./src/index.html").pipe(gulp.dest("./build"));
  done();
});

gulp.task("server", done => {
  connect.server({
    root: ["./build"],
    port: 8080
  });
  done();
});

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

gulp.task("watch", done => {
  gulp.watch("./src", gulp.series("copy", "build"));
});

let serie;
if (isStart) serie = gulp.series("server");
if (isBuild) serie = gulp.series("copy", "build");
if (isWatch) serie = gulp.series("copy", "build", "server", "watch");

gulp.task("default", serie);

//Tarea... Hacer que la tarea watch refresque el navegador cuando termine
