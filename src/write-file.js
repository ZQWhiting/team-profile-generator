const fs = require('fs');

// function to write HTML file
function writeFile(html) {
    return new Promise((resolve, reject) => {
        fs.writeFile(getPath(), html, err => {
            if (err) {
                reject(err);
                return;
            };

            resolve({
                ok: true,
                message: 'HTML successfully created! Find your copy along with your stylesheets in the /dist folder'
            });
        });
    });
}

// Get unique file path.
function getPath() {
    let i = 1
    let repeat = true;
    while (repeat) {
        if (fs.existsSync(`./dist/Team-${i}.html`)) {
            i++
        }
        else {
            return `./dist/Team-${i}.html`
        }
    }
}

module.exports = writeFile;