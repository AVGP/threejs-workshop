# threejs-workshop
Workshop kit for Three.js

This kit includes
* Three.js
* three-world 2.0.0
* The Three.js OBJMTLLoader
* Two 3D models (.obj) and related MTL files + textures
* package.json to use browserify / watchify

There are two branches:

* main - the raw, blank code, ready to get started for the workshop
* tryout - the end result with a loaded 3D model etc.

## Get it up
To begin with, you should start a static file web server (e.g. `python -m SimpleHTTPServer` where available) and then run `npm run dev`
The `dev` script will run watchify on `js/main.js` and create the `app.js` file.
