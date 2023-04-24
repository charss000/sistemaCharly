const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{

                primary:{
                    300:"#AEFF27",
                    900:"#84BF1D"
                },
                secondary:{
                    300:"#1E1F25",
                    900:"#131517",
                },

            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
