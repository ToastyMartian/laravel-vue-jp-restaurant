import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                en: 'Dosis',
                jp: 'Dela Gothic One'
            },
            colors: {
                beige: {
                    '100': '#f6ead4'

                },
                gray: {
                    '900': '#0e0e0e'
                },
                coral: {
                    DEFAULT: '#E85F5C'
                },
                green: {
                    DEFAULT: '#53A548'
                }
            },
        },
    },

    plugins: [forms],
};
