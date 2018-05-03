# card acqusition
A sample POC on card acqusition

#prerequisite
## Installation
```bash
# Make sure you have node => 6.8
npm install -g yo
npm install -g generator-react-webpack
If you are behind the proxy 
npm config set registry https://registry.npmjs.org/
npm config set proxy http://<username>:<password>@<proxy-server-url>:<port>
npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port>
```

## Important Links
* > [ReactJS](http://facebook.github.io/react/) - A JavaScript library for building user interface
*  >[Redux](https://github.com/reactjs/redux/tree/master/docs) - A predictable state container for JavaScript apps
*  >[React-redux](https://github.com/reactjs/react-redux )  A library  that integrates reat with redux.
*  >[react-router ](https://github.com/reacttraining/react-router) A routing  library for React-Router 
*  >[React-Intl](https://github.com/yahoo/react-intl) Internationalization for react component.
*  >[Jest](https://facebook.github.io/jest/docs/en/api.html/)  Testing library.


## Setting up projects
```bash
# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project

# Run the generator
yo react-webpack
```

Please make sure to edit your newly generated `package.json` file to set description, author information and the like.


> Yeoman generator for [ReactJS](http://facebook.github.io/react/) - lets you quickly set up a project including karma test runner and [Webpack](http://webpack.github.io/) module system.

Generator-React-Webpack will help you build new React projects using modern technologies.

Out of the box it comes with support for:
- Webpack
- ES2015 via Babel-Loader
- Different supported style languages (sass, scss, less, stylus)
- Style transformations via PostCSS
- Automatic code linting via esLint
- Ability to unit test components via Karma and Mocha/Chai

## Changes since version 1.0
This generator is written in ES2015. This means it is ___not compatible with node.js versions before 4.0___.

It also does __NOT__ include support for Flux-Frameworks anymore. Instead, we will use it as a base for other generators to build upon. This will make the base generator easier to use and update.

If you are interested, feel free to write your own generator and use generator-react-webpack as a base (via composition).

If you have built a generator using generator-react-webpack, tell us and we will add a link to our README.

## Generators that extend generator-react-webpack
- [Generator-React-Webpack-Alt](https://github.com/weblogixx/generator-react-webpack-alt) (Adds ability to create actions, stores and sources for [alt.js](http://alt.js.org))
- [Generator-React-Webpack-Redux](https://github.com/stylesuxx/generator-react-webpack-redux) (Adds ability to create actions and reducers for [Redux](https://github.com/rackt/redux))

---


## Generating new components
```bash
# After setup of course :)
# cd my-new-project
yo react-webpack:component my/namespaced/components/name
```

The above command will create a new component, as well as its stylesheet and a basic testcase.

## Generating new stateless functional components
```
yo react-webpack:component my/namespaced/components/name --stateless
```

Stateless functional components where introduced in React v0.14. They have a much shorter syntax than regular ones and no state or lifecycle methods at all. Please read the [React 0.14 release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) to get more information about those components.

___Note___: You will still be able to set properties for stateless components!

## Adding PostCSS plugins
If you have enabled [PostCSS](https://github.com/postcss/postcss) at generation time, install your PostCSS plugins via npm and *require* it in **postcss** function in *cfg/base.js*.

Example for autoprefixer:
```bash
cd my-new-project
npm install autoprefixer
```
Require in *cfg/base.js*
```JavaScript
...
postcss: function () {
  return [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 8']
    })
  ];
}
...
```

## Usage
The following commands are available in your project:
```bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Auto-run unit tests on file changes
npm run test:watch

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

### Naming Components
We have opted to follow [@floydophone](https://twitter.com/floydophone) convention of uppercase for component file naming e.g. [Component.js](https://github.com/petehunt/ReactHack/tree/master/src/components). I am open to suggestions if there is a general objection to this decision.

### Modules
Each component is a module and can be required using the [Webpack](http://webpack.github.io/) module system. [Webpack](http://webpack.github.io/) uses [Loaders](http://webpack.github.io/docs/loaders.html) which means you can also require CSS and a host of other file types. Read the [Webpack documentation](http://webpack.github.io/docs/home.html) to find out more.

## Props
Thanks to [Edd Hannay](https://github.com/eddhannay) for his Webpack optimisations, my local merge and testing meant his additions lost his signature (my fault, sorry). So, big thanks Edd.

## Contribute
Contributions are welcomed. When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

### Running Tests
`npm test` or `node node_modules/.bin/mocha`

## License
[MIT license](http://opensource.org/licenses/mit-license.php)
