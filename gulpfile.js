const gulp = require("gulp");
const browserfy = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const connect = require("gulp-connect");

console.log(process.argv);
const isBuild = process.argv.includes("--build");
const isStart = process.argv.includes("--start");
const isWatch = process.argv.includes("--watch");

gulp.task("copy", done => {
  gulp.src("./src/index.html").pipe(gulp.dest("./build"));
  gulp.src("./src/styles/index.css").pipe(gulp.dest("./build"));
  gulp.src("./src/images/**/*").pipe(gulp.dest("./build/images"));

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
  browserfy({
    entries: ["./src/app.js"]
  })
    .transform("browserify-css", { global: true })
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
