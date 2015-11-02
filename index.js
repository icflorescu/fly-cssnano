'use strict';

const assign = require('object-assign');

module.exports = function () {
    this.filter('cssnano', (source, options) => {
        if (options && options.sourceMap) {
            options = assign({sourcemap: true}, options);
        }

        return require('cssnano').process(source, options).then(result => result.css);
    }, {ext: '.css'});
};
