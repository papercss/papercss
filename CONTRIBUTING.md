## Contributing
Check out what's been added but not yet released at [develop.getpapercss.com](https://develop.getpapercss.com)

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
