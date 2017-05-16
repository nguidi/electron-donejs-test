var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm"
}, {
  bundleAssets: true
, minify: false
});
// options added by `donejs add electron` - START
var electronOptions = {
  main: "electron-main.js",
  buildDir: "./build",
  platforms: ["darwin","win32","linux"],
  archs: ["ia32","x64"],
  glob: [
    "package.json",
    "production.html",
    "node_modules/steal/steal.production.js"
  ]
};

var stealElectron = require("steal-electron");

// Check if the electron option is passed.
var buildElectron = process.argv.indexOf("electron") > 0;

if(buildElectron) {
  buildPromise = buildPromise.then(function(buildResult){
    return stealElectron(electronOptions, buildResult);
  }).catch(function(err) {
    console.log(err);
  });
}
// options added by `donejs add electron` - END
