For distributing a new version to Github, NPM, and the CDN

1. Ensure the build is up to date with `npm run build`
2. Update all version numbers in the app using [Semantic Versioning](https://semver.org/). Ex renaming `1.8.0` to `1.8.1` for a patch.
   1. package.json
   2. package-lock.json
   3. docs/content/_index.md
3. Create commit of the new version with the changed version files: `v1.8.3`
4. Push to master
5. Create new release in the Github UI
   1. Create a new tag with the same name as the commit: `v1.8.3`
   2. Add details about the additions and fixes
   3. Upload the files in `dist` to the "Attach Binaries" section (`paper.css` and `paper.min.css`)
6. Publish to NPM with `npm publish`. The CDN will automatically pick up the new files
