const fs = require('fs');
const nodeHtmlToImage = require('node-html-to-image');



const html = fs.readFileSync('script/asd.html').toString();



nodeHtmlToImage({
    output: 'filename.png',
    html: html,

})
