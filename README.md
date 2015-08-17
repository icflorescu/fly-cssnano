<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [cssnano](http://cssnano.co) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage

> Check out the [documentation](http://cssnano.co/options) to see the
available options.

## Install

With [npm][npm-pkg-link] do:

```a
npm install -D fly-cssnano
```

## Example

```js
export build = function* () {
  yield this
    .source("src/**/*.css")
    .cssnano()
    .target("dist/")
}
```

## License

MIT © [Ben Briggs][author]

[author]:       http://beneb.info
[contributors]: https://github.com/ben-eb/fly-cssnano/graphs/contributors
[releases]:     https://github.com/ben-eb/fly-cssnano/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-cssnano
[npm-ver-link]: https://img.shields.io/npm/v/fly-cssnano.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-cssnano.svg?style=flat-square
[travis-link]:  https://travis-ci.org/ben-eb/fly-cssnano
[travis-badge]: http://img.shields.io/travis/ben-eb/fly-cssnano.svg?style=flat-square
