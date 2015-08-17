'use strict';

module.exports = () => {
    this.filter("cssnano", (source, options) => {
        try {
            return require('cssnano').process(source, options);
        } catch (e) {
            throw e;
        }
    }, {ext: '.css'});
};
