<h1 align="center">🎓 Material Design CV Template</h1>
<p align="center">
  <i>A customisable template for a single-page material design CV website</i><br>
</p>

## Intro

A material-design inspired web-based CV template, with several different theme choices.
The app is very easy to use - you'll only need to modify a single file with your info, then once built the static HTML can be easily deployed to any CDN or static hosting provider.

## Screenshots

There's a few sample config files and screenshots [here](https://github.com/Lissy93/md-cv-maker/tree/master/examples).
Or, for a live demo feel free to take a look at my CV at: [aliciasykes.com/cv](http://aliciasykes.com/cv/)

[![Screenshots](https://i.ibb.co/KxxdRd8/md-cv-template-screenshots.png)](http://aliciasykes.com/cv/)


## Usage

1. **Clone from Git** - `git clone https://github.com/Lissy93/md-cv-maker.git`
2. **Install Dependencies** - `yarn install`
3. **Add content** - Populate the `src/locals.json` with your content ([here's some examples](https://github.com/Lissy93/md-cv-maker/tree/master/examples))
4. **Build** - Compile and minify source with `yarn build`
5. **Deploy** - Once the project is built, open `dist/index.html` in your browser, or serve it up with `yarn start`

During development, you can watch for changes and automatically re-build the app, by running `yarn watch`

All textual content is located in [`src/locals.json`](https://github.com/Lissy93/md-cv-maker/blob/master/src/locals.json), if you're happy with the default template, this should be the only file you need to modify. You can view some example templates in the [`examples/`](https://github.com/Lissy93/md-cv-maker/tree/master/examples) directory.


## File Structure

```
├── examples/           # Some example configs and screenshots
├── gulpfile.js         # Build script
├── package.json        # Project manifest
├── readme.md           # Docs
├── server.js           # Optional server, to serve up built app
└── src
   ├── assets           # Any images, fonts, etc to use
   ├── locals.json      # Text to display (edit this file!)
   ├── scripts          # JS for interactive content
   ├── styles           # CSS for styling
   └── views            # HTML fragments for layout
```
After building the project, a new directory - `dist/` will be created. This contains all compiled and production ready files which can then be served up or uploaded to your server, ready to go.

---

<!-- License + Copyright -->
<p  align="center">
  <i>© <a href="https://aliciasykes.com">Alicia Sykes</a> 2017</i><br>
  <i>Licensed under <a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a></i><br>
  <a href="https://github.com/lissy93"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a><br>
  <i>Thanks for visiting :)</i>
</p>

<!-- Dinosaur -->
<!-- 
                        . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \ `..~                      `.
    || |      }  }              /       \  \
(\   \\ \~^..'                 |         }  \
 \`.-~  o      /       }       |        /    \
 (__          |       /        |       /      `.
  `- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      `.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_
-->

