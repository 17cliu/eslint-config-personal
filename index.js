module.exports = {
    root: true,
    parser: 'babel-eslint',
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module', // Allows for the use of imports
        ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        worker: true
    },
    extends: [
        'standard'
    ],
    plugins: [
        'import',
        'node',
        'promise'
    ],
    rules: {
        // 4 spaces for indent
        'indent': ['error', 4, { SwitchCase: 1 }],
        // arrays look like: [1, 2, 3]
        'array-bracket-spacing': [2, 'never'],
        // require simplest way of writing () => { ... }
        'arrow-body-style': ['error', 'as-needed'],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // follow "one true brace style"
        'brace-style': ['error', '1tbs'],
        // enable trailing commas for multi-line objects/imports/exports,
        // which keeps diffs clean (no line change where only commas were
        // added/removed)
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'only-multiline',
            'imports': 'only-multiline',
            'exports': 'only-multiline',
            'functions': 'ignore'
        }],
        // spacing for properties
        'computed-property-spacing': 2,
        // require a trailing newline in all files
        'eol-last': 2,
        // allow async-await
        'generator-star-spacing': 0,
        // filter results in for-in loops to skip props in prototype chain
        'guard-for-in': 2,
        // prevent line breaks in arrow functions without a block body
        'implicit-arrow-linebreak': ['error', 'beside'],
        // require linebreak between class members
        'lines-between-class-members': 2,
        // enforce max number of characters per line
        'max-len': [2, 100],
        // prevent usage of default `console` (use custom logger)
        // 'no-console': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // disallow changes to native objects
        'no-extend-native': 2,
        // no unnecessary fn binding
        'no-extra-bind': 2,
        // no unnecessary parentheses
        'no-extra-parens': [
            'error', 
            'all', 
            { 
                nestedBinaryExpressions: false, 
                ignoreJSX: 'all' 
            }
        ],
        // no extra semicolons
        'no-extra-semi': 2,
        // no `this` outside of classes or class-like objects
        // disabled because it complains about valid usage in jQuery fns
        // 'no-invalid-this': 2,
        // no multiline strings; concat them if need be
        'no-multi-str': 2,
        // disallow nested ternary expressions
        'no-nested-ternary': 2,
        // allow `new Thing()`
        'no-new': 0,
        // don't use `String`, `Number`, `Boolean` w/ `new` operator
        'no-new-wrappers': 2,
        // throw `Error` instances only
        'no-throw-literal': 2,
        // no unnecessary concat of strings
        'no-useless-concat': 2,
        // use `let` or `const` instead of `var`
        'no-var': 2,
        // disallow `with`
        'no-with': 2,
        // use concise way of defining object properties whenever possible
        'object-shorthand': ['error', 'always'],
        // force empty lines between multiline blocks
        'padding-line-between-statements': [
            'error',
            // { blankLine: 'always', prev: '*', next: ['multiline-block-like'] },
            // { blankLine: 'always', prev: ['multiline-block-like'], next: '*' },
            { blankLine: 'always', prev: '*', next: ['for', 'if', 'switch', 'try', 'while', 'with'] },
            { blankLine: 'always', prev: ['for', 'if', 'switch', 'try', 'while', 'with'], next: '*' },
            // { blankLine: 'never',  prev: ['singleline-const', 'singleline-let'], next: ['const', 'let']}
        ],
        // force quote consistency
        'quotes': ['error', 'single'],
        // prefer using `const` for vars that are not reassigned
        'prefer-const': ['error'],
        // prefer template strs instead of str concat
        'prefer-template': ['error'],
        // require semicolons
        'semi': ['error', 'always'],
        // require space before fn parentheses
        'space-before-function-paren': [2, 'never'],

        // eslint-plugin-import
        // https://github.com/benmosher/eslint-plugin-import
        // adapted from https://github.com/xojs/xo/blob/master/config/plugins.js
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': ['error', {
            js: 'never',
            json: 'always',
            jsx: 'never'
        }],
        'import/first': 'error',
        'import/named': 'error',
        'import/namespace': ['error', { allowComputed: true }],
        'import/no-absolute-path': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-amd': 'error',
        'import/no-duplicates': 'error',
        // Next two rules can't be enabled until we convert to ES6 modules
        // 'import/newline-after-import': 'error',
        // 'import/no-commonjs': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-as-default': 'error',
        'import/no-unresolved': ['error', { commonjs: true }],
        'import/order': [
            'error',
            {
              groups: [
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
                'index'
              ]
            }
        ],
        'import/prefer-default-export': 'error',
        'import/no-unassigned-import': ['error', {
            allow: [
                '**/*.css',
                '**/*.scss',
                'babel-polyfill',
                '@babel/polyfill',
                'babel-register',
                '@babel/register'
            ]
        }],

        // eslint-plugin-node
        // https://github.com/mysticatea/eslint-plugin-node
        // adapted from https://github.com/xojs/xo/blob/master/config/plugins.js
        'node/no-unpublished-bin': 'error',
        'node/process-exit-as-throw': 'error',
        'node/no-deprecated-api': 'error',

        // eslint-plugin-promise
        // https://github.com/xjamundx/eslint-plugin-promise
        // adapted from https://github.com/xojs/xo/blob/master/config/plugins.js
        'promise/param-names': 'error',
        'promise/no-return-wrap': ['error', { allowReject: true }],
        'promise/no-return-in-finally': 'error'
    }
};
