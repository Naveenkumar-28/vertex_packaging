const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const src = path.join(__dirname, '../originals');
const out = path.join(__dirname, '../public/images');
const sizes = [400, 800, 1200]; // thumbnail, card, detail page

fs.mkdirSync(out, { recursive: true });
fs.mkdirSync(path.join(__dirname, '../data'), { recursive: true });

(async () => {
    const files = fs.readdirSync(src).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
    const list = [];

    for (const file of files) {
        const name = path.parse(file).name;
        for (const w of sizes) {
            await sharp(path.join(src, file))
                .rotate()                                   // fix phone-photo orientation
                .resize({ width: w, withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(path.join(out, `${name}-${w}.webp`));
        }
        list.push({ id: name, name, base: `/images/${name}` });
        console.log('Done', file);
    }
    fs.writeFileSync(path.join(__dirname, '../data/images.json'), JSON.stringify(list, null, 2));
})();
