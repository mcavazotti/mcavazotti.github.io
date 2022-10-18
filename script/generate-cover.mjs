import * as PImage from "pureimage"
import * as fs from 'fs'


const paths = JSON.parse(fs.readFileSync('src/assets/scully-routes.json'));

const font = PImage.registerFont('src/assets/fonts/static/SourceSans3-SemiBold.ttf', 'SourceSans3');

font.loadSync();

for (const path of paths) {
    if (path.published && path.title) {

        let cover = PImage.make(1200, 650);
        let ctx = cover.getContext('2d');

        ctx.imageSmoothingEnabled = true;

        var gradient = ctx.createLinearGradient(0, 650, 200, 0);
        gradient.addColorStop(0, '#0A051E');
        gradient.addColorStop(1, '#05004F');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1200, 650);


        ctx.textAlign = 'center';
        let fontSize = 72;
        ctx.font = `${fontSize}pt SourceSans3`;
        let length = ctx.measureText(path.title);
        console.log(path.title);
        console.log(length);

        let text = '';
        if (length.width > 1200 * 0.8) {
            if (path.shortTitle) {
                text = path.shortTitle;
                let width = ctx.measureText(path.shortTitle).width;
                if (width < 1200 * 0.8) {
                    fontSize = fontSize * 1200 * 0.8 /width;
                }
            }
        } else {
            let width = ctx.measureText(path.title).width;
            text = path.title;
            if (width < 1200 * 0.8) {
                fontSize = fontSize * 1200 * 0.8 /width;
            }
        }

        ctx.font = `${fontSize}pt SourceSans3`;

        ctx.fillStyle = '#0F9BEB';

        ctx.fillText(text, 600, 325);

        let filename = 'src/assets/covers/generated/' + path.route.split('/').pop() + '.png';
        PImage.encodePNGToStream(cover, fs.createWriteStream(filename)).then(() => {
            console.log("wrote out the png file to " + filename);
        }).catch((e) => {
            console.log("there was an error writing");
        });
    }
}