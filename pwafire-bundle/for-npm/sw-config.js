 module.exports = {
       "globDirectory": "build/", // The base directory you wish to match globPatterns against, 
       // relative to the current working directory.
       "globPatterns": [
       // edit to add all file to cache; configure for your project below
       "**/*.css", // eg cache all css files, images etc in the root folder
       "index.html",
       "js/animation.js",  
       "images/*.jpg"
       ],
       "swSrc": "src/service-worker.js", // The path and filename of the service worker file that will be created by the build process.
       "swDest": "build/service-worker.js", // The path to the source service worker file that can contain your own customized code,
       // in addition to containing a match for injectionPointRegexp.
      "globIgnores": [
       "../sw-config.js"
       ]
       };
