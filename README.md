# PaperCSS
### The Less Formal CSS Framework

## Demo & Docs
View the demo & docs at [getpapercss.com](https://www.getpapercss.com)
![Preview](/img/screenshots/preview.gif)

## Download
[![Download](/img/screenshots/download.PNG)][download]
[![Download](/img/screenshots/download-minified.PNG)][download-minified]

## About
I got tired of mODerN STylEs and clean pages on the internet. I also wanted to learn more about Flexbox and Less. So I made PaperCSS to solve these two challenges of mine :)

The goal of PaperCSS is to be as minimal as possible when adding classes. For example, a button should just look like a paper button. There shouldn't be a need to add a class such as `paper-button`. Because of this, adding PaperCSS to a markdown generated page should instantly paper-ize it.

While I'm proud of how it's turned out so far, I think there's a lot that can still be done to make it better. Such things as refactoring, adding more utility classes and more border types (like dashed/dotted) could really polish off this framework. That's why it's open sourced and available for pull requests!

If you are new to Git or Less, this would be a great project to get your feet wet with. I'd be happy to help walk you through the pull request process.

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

## Contributing
This project is open source and contributions are very welcomed. It is also as beginner friendly as possible, so don't be afraid to jump in if you've never contributed to any Git project before! Feel free to reach out if you are new and need help with the process.

Similar to customizing, make sure you have Git, Node, and NPM on your system.
- fork the repo via the fork button in the upper left
- run `git clone https://github.com/[your_username]/papercss.git`
- change directories to papercss `cd papercss`
- run `npm install`
- create a new branch for your contribution `git checkout -b my-feature`
- Start the local server to view changes with `npm start`
- _code and stuff_
- Once done, commit and push your changes to your fork
- Finally, open a pull request on this repo. Be sure to include any pictures and details on what you changed!

## Credits
Shouts outs to Tiffany Rayside for creating Imperfect Buttons, which was an inspiration for this project. https://codepen.io/tmrDevelops/pen/VeRvKX

[download]: https://github.com/rhyneav/papercss/releases/download/v1.0.0/paper.css
[download-minified]: https://github.com/rhyneav/papercss/releases/download/v1.0.0/paper.min.css
