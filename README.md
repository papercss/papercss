# PaperCSS
### The Less Formal CSS Framework

## Demo & Docs
View the demo & docs at [getpapercss.com](https://www.getpapercss.com)

![Preview](/img/screenshots/preview.gif)

## Download
[![Download](/img/screenshots/download.PNG)][download]
[![Download](/img/screenshots/download-minified.PNG)][download-minified]

### NPM
PaperCSS is now available on NPM as of version 1.1.0. Install with `npm install papercss --save` and find the CSS in:
- node_modules/papercss/dist/paper.css
- node_modules/papercss/dist/paper.min.css

### CDN
Don't want to download it? That's cool. You can just link to PaperCSS via unpkg's CDN. You can use either:
- https://unpkg.com/papercss@1.1.0/dist/paper.css
- https://unpkg.com/papercss@1.1.0/dist/paper.min.css

## Quick Start
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://unpkg.com/papercss@1.1.0/dist/paper.min.css">
  <title>Document</title>
</head>
<body>
  <div class="paper container">
    <h1>Some Fresh Title</h1>
    <p>This is where some content would go.</p>
  </div>
</body>
</html>
```

## Customizing
To customize PaperCSS, clone the Git repo, run `npm install`, and make any chages to the .less files within /src

The main places you might want to make changes would be colors.less or fonts.less. Here, you can specify new colors or fonts for your CSS build.

After you make changes, be sure to build the new CSS files. Do so by running `npm run build` and get them from the /dist folder.

Here's the full workflow for customization:
- Make sure you have Git, Node, and NPM
- run `git clone https://github.com/rhyneav/papercss.git`
- change directories to papercss `cd papercss`
- run `npm install`
- _make changes to .less files within source_
- preview changes with `npm start` and go to http://localhost:8080 (changes are automatically reloaded on page)
- OR run `npm run build` to create the new CSS in the /dist folder

### Adding a new color
- Go to file `src/color.less`
- Add a new variable and assign it to a color hex value
- Add the new variable to the list of colors
- Add a new variable for the light variation
- Once `npm start` or `npm run build` has been run then it will create the new css so that the new color can be used as a text, border or background

## Contributing
Check out what's been added but not yet releases at [develop.getpapercss.com](https://develop.getpapercss.com)

This project is open source and contributions are very welcomed. It is also as beginner friendly as possible, so don't be afraid to jump in if you've never contributed to any Git project before! Feel free to reach out if you are new and need help with the process.

Similar to customizing, make sure you have Git, Node, and NPM on your system.
- fork the repo via the fork button in the upper left
- run `git clone https://github.com/[your_username]/papercss.git`
- change directories to papercss `cd papercss`
- run `npm install`
- switch to the develop branch `git checkout develop`. This is the branch where features are added. Checking it out will set up the remote tracking to the develop branch on Github.
- create a new branch for your feature off of the develop branch `git checkout -b feature-thing develop`. Please be sure to prepend your new feature branch with "feature-"
- Start the local server to view changes with `npm start`
- _code and stuff_
- Once done, commit and push your changes to your fork
- Finally, open a pull request on this repo. Be sure to include any pictures and details on what you changed!
- Once approved, your changes will be merged to the develop branch where it will eventually be added to a release that ends up in the master branch. Check out [Vincent Driessen's blog post](http://nvie.com/posts/a-successful-git-branching-model/), [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html), or [#27](https://github.com/rhyneav/papercss/issues/27) for more details on how this works.

Note: If you have a hotfix, create your hotfix branch off of the master branch instead of develop: `git checkout -b hotfix-1.X.X master`

## About
I got tired of mODerN STylEs and clean pages on the internet. I also wanted to learn more about Flexbox and Less. So I made PaperCSS to solve these two challenges of mine :)

The goal of PaperCSS is to be as minimal as possible when adding classes. For example, a button should just look like a paper button. There shouldn't be a need to add a class such as `paper-button`. Because of this, adding PaperCSS to a markdown generated page should instantly paper-ize it.

While I'm proud of how it's turned out so far, I think there's a lot that can still be done to make it better. Such things as refactoring, adding more utility classes and more border types (like dashed/dotted) could really polish off this framework. That's why it's open sourced and available for pull requests!

If you are new to Git or Less, this would be a great project to get your feet wet with. I'd be happy to help walk you through the pull request process.

## Credits
Shouts outs to Tiffany Rayside for creating Imperfect Buttons, which was an inspiration for this project. https://codepen.io/tmrDevelops/pen/VeRvKX

[download]: https://github.com/rhyneav/papercss/releases/download/v1.1.0/paper.css
[download-minified]: https://github.com/rhyneav/papercss/releases/download/v1.1.0/paper.min.css
