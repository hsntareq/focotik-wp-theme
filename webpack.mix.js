let mix = require('laravel-mix');

mix.js('src/frontend.js', 'build')
    .sass('src/styles.scss', 'build/frontend.css');