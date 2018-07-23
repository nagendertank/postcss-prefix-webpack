const validateOptions = require('schema-utils');
const postcss = require('postcss');
const prefixer = require('postcss-prefixer');
const fs = require('fs');


const schema = {
    'input':'string',
    'output':'string',
    'prefixProperties':'object'
};

function POSTCSSPREFIX(options) {
    
    validateOptions(schema, options, 'Example Loader');
    const input = fs.readFileSync(options.input, 'utf-8');

    const output = postcss([
        prefixer(options.prefixProperties)
    ]).process(input);

    fs.writeFileSync(options.output, output);
    // Setup the plugin instance with options...
}

POSTCSSPREFIX.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
       
    });
};

module.exports = POSTCSSPREFIX;
