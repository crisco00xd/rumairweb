# Rumairweb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Adding features

Always work on separate branches for features.
Structure commit messages with:
   -[Feat] "thing you added"
   -[Fix] "Thing you fixed"
   -[Removed] "Thing you removed"
   - etc
Add descriptions to large commits. 
Create a Pull Request when your feature is complete and bugfree in order to merge to master.


## Branches & Special Files

Branch name structure:
All Lower case, separated by hyphens.
example: this-is-my-test-branch


For every assigned task have 1 branch. Don't lump in unrelated changes into the same branch. the 1 issue- 1 branch workflow makes merge requests a lot faster and convenient for revisions.

Don't stage/commit files like package-lock.json/package.json/tsconfig/etc. These are files that shouldn't be changed unless the project as a whole is undergoing updating of dependencies. Your local package lock is often different from the remote one, this is nothing to worry about.
