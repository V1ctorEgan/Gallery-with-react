const tailwindcss = require('tailwindcss');
module.exports = {
    pluggins:[
        tailwindcss('./tailwindcss.js'),
        require('autoprefixer')
    ]
}