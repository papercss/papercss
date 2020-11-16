## Contributing

Check out what's been added but not yet released at [develop.getpapercss.com](https://develop.getpapercss.com)

This project is open source and contributions are very welcomed. It is also as beginner friendly as possible, so don't be afraid to jump in if you've never contributed to any Git project before! Feel free to reach out if you are new and need help with the process.

Please before sending a PR, make sure you are properly using the `.editorconfig` file with your IDE. If your IDE doesn't natively support `editorconfig` files, you can use an extension/package/module. For example in Atom there is the [editorconfig package](https://atom.io/packages/editorconfig), as well for [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime), [VS Code](https://github.com/editorconfig/editorconfig-vscode), [Vim](https://github.com/editorconfig/editorconfig-vim), ...

Once you are ready to contribute, here the workflow you should follow:

- Fork the repo then clone it: `git clone git@github.com:[your_username]/papercss.git`
- `cd papercss` then install dependencies: `npm install`
- Change your current branch to `develop`: `git checkout develop`
- Create your new branch where you will write your code: `git checkout -b feature-thing develop`. Please be sure to prepend your new feature branch with "feature-"
- Write some code!
- To build the scss (in `src/`) to css (in `dist/`), run `npm run css:build`. Note: you will need to re-run this command to include the latest changes in `src/`.
- To preview your changes, you can run `npm start`. This will start a `localhost` server.
- Check to make sure your code is following style rules with `npm run stylelint`
- Once done commit and push your changes to your fork. The linter is also run as a pre-commit hook.
- Open a pull request on the origin papercss repo. Be sure to include any pictures and/or details on what you have done; it will help reviewers **a lot**!
- When your changes are approved, they will be merged into the `develop` branch, which will finally be merged into the `master` branch when we reach a milestone regarding features and bug fixes. Check out [Vincent Driessen's blog post](http://nvie.com/posts/a-successful-git-branching-model/), [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html), or [#27](https://github.com/rhyneav/papercss/issues/27) for more details on how this works.

Note: If you have a hotfix (usually typos and minor documentation tweaks), create your hotfix branch off of the master branch instead of develop: `git checkout -b hotfix-thing master`. The changes will be merged into both the master and develop to keep the branches consistent.