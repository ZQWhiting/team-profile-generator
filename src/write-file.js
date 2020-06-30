const fs = require('fs');

// function to write HTML file
function writeFile(html) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/HTML.html', html, err => {
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

module.exports = writeFile;