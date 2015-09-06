'use strict';

const test = require('tape').test;
const cssnano = require('..');

test('fly-cssnano', t => {
    t.plan(3);
    cssnano.call({
        filter: function (name, transform, options) {
            let input = 'h1 {\n color: black\n }\n';
            let output = 'h1{color:#000}';

            transform(input).then(value => {
                t.equal(value, output, 'should minify the css');
            });

            t.equal(name, 'cssnano', 'should add the cssnano filter');
            t.equal(options.ext, '.css', 'should minify only .css files');
        }
    });
});
