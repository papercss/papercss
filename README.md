<p align="center">
  <a href="https://getpapercss.com">
    <img src="https://raw.githubusercontent.com/papercss/papercss/master/docs/static/favicon.ico?raw=true" alt="PaperCSS logo">
  </a>

  <h3 align="center">PaperCSS</h3>

  <p align="center">The less formal CSS framework, with a quick and easy integration.</p>
</p>

## Table of contents

- [Quick-start](#quick-start)
- [Status](#status)
- [Content of the framework](#content-of-the-framework)
- [Documentation](#documentation)
- [Customizing](#customizing)
- [Contributing](#contributing)
- [About](#about)
- [Credits and license](#credits-and-license)

## Quick-start

There are several options available:

- You can [download the latest release](https://github.com/papercss/papercss/releases).
- Clone the repo: `git clone https://github.com/papercss/papercss.git`
- Install with npm: `npm install papercss`
- Install with yarn: `yarn add papercss`
- Import it using a CDN (it will automatically download the latest version):
    - `https://unpkg.com/papercss/dist/paper.min.css`
    - `https://unpkg.com/papercss/dist/paper.css`

## Status

[![Build status](https://travis-ci.org/papercss/papercss.svg?branch=master)](https://travis-ci.org/papercss/papercss)
[![Dependencies](https://img.shields.io/david/papercss/papercss.svg)](https://david-dm.org/papercss/papercss)
[![Peer dependencies](https://img.shields.io/david/peer/papercss/papercss.svg)](https://david-dm.org/papercss/papercss?type=peer)
[![Dev dependencies](https://img.shields.io/david/dev/papercss/papercss.svg)](https://david-dm.org/papercss/papercss?type=dev)

## Content of the framework

We provide compiled CSS (`paper.css`) as well as minified CSS (`paper.min.css`).

You can choose which components you may want to use. Only the components that get imported into `src/styles.scss` will be compiled into `dist/paper.css`.

You can also play with original, source files, written in SCSS, in `src/`.

## Documentation

You can view the docs at [getpapercss.com](https://www.getpapercss.com). Those are directly from the `master` branch; this means those features are stable and ready to be used in your project.

You can also view the develop branch at [develop.getpapercss.com](https://develop.getpapercss.com), this includes new features that are coming soon in the master branch. Be warned, a feature in develop can be removed without any prevention.

## Customizing

You can customize PaperCSS easily, clone the repo, run `npm install` and make any changes to `.scss` files in `src/`.

The main place you might want to make changes would be `core/_config.scss`, where you can specify new colors or fonts for your CSS build.

After you make changes, be sure to build the new CSS files. Do so by running `gulp build` and get them from the `dist/` folder.

## Contributing

This project is open source and contributions are very welcomed. It is also as beginner friendly as possible, so don't be afraid to jump in if you've never contributed to any Git project before! Feel free to reach out if you are new and need help with the process.

Please before sending a PR, make sure you are properly using the `.editorconfig` file with your IDE. If your IDE doesn't natively support `editorconfig` files, you can use an extension/package/module. For example in Atom there is the [editorconfig package](https://atom.io/packages/editorconfig), as well for [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime), [VS Code](https://github.com/editorconfig/editorconfig-vscode), [Vim](https://github.com/editorconfig/editorconfig-vim), ...

Once you are ready to contribute, here the workflow you should follow:

- Fork the repo then clone it: `git clone git@github.com:[your_username]/papercss.git`
- `cd papercss` then install dependencies: `npm install`
- Change your current branch to `develop`: `git checkout develop`
- Create your new branch where you will write your code: `git checkout -b feature-thing develop`. Please be sure to prepend your new feature branch with "feature-"
- Start the local web-server: `gulp` or `npm start`
- Write some code!
- Check to make sure your code is following style rules with `npm run stylelint`
- Once done commit and push your changes to your fork. The linter is also run as a pre-commit hook.
- Open a pull request on the origin papercss repo. Be sure to include any pictures and/or details on what you have done; it will help reviewers **a lot**!
- When your changes are approved, they will be merged into the `develop` branch, which will finally be merged into the `master` branch when we reach a milestone regarding features and bug fixes. Check out [Vincent Driessen's blog post](http://nvie.com/posts/a-successful-git-branching-model/), [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html), or [#27](https://github.com/rhyneav/papercss/issues/27) for more details on how this works.

Note: If you have a hotfix (usually typos and minor documentation tweaks), create your hotfix branch off of the master branch instead of develop: `git checkout -b hotfix-thing master`. The changes will be merged into both the master and develop to keep the branches consistent.

## About

PaperCSS was originally made by [@rhyneav](https://github.com/rhyneav) to be something different than the typical mODerN STylEs and clean pages found in every other CSS framework. It was built with LESS and deployed on a single index.html page before being open sourced. It has since evolved; The CSS source has been rewritten in SCSS and the documentation is now built with Hugo (all thanks to some [wonderful contributors](https://github.com/papercss/papercss/graphs/contributors)). In addition to the original creator, it is maintained by [@Fraham](https://github.com/Fraham) and [@TotomInc](https://github.com/TotomInc).

The goal of PaperCSS is to be as minimal as possible when adding classes. For example, a button should just look like a paper button. There shouldn't be a need to add a class such as `paper-button`. Because of this, adding PaperCSS to a markdown generated page should instantly paper-ize it.

Feel free to use it for wireframes, web apps, blogs, or whatever else you can think of!

If you are new to Git or SCSS, this would be a great project to get your feet wet with. I'd be happy to help walk you through the pull request process.

## Credits and license

Code and documentation under [ISC license](https://github.com/papercss/papercss/blob/master/license).

Shout out to Tiffany Rayside for creating Imperfect Buttons, which was an inspiration for this project. https://codepen.io/tmrDevelops/pen/VeRvKX
