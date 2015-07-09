Package.describe({
  name: "gwendall:password-access",
  summary: "Password restricted access to app",
  version: "0.1.0"
});

Package.onUse(function(api, where) {

  api.use([
    "templating@1.0.7",
    "jquery@1.0.0",
    "session",
    "iron:router@1.0.5",
    "frozeman:storage@0.1.8",
    "reactive-var"
  ]);

  api.addFiles([
    "shared/lib.html",
    "shared/lib.css",
    "shared/lib.js",
  ], "client");

  api.export("Access", "client");

});
