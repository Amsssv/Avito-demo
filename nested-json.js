const fs = require('fs');
let resolve = require('path').resolve;
let join = require('path').join;
let cp = require('child_process');

let lib = resolve(__dirname, '../Avito-demo/');


fs.readdirSync(lib).forEach((mod) => {
    let modPath = join(lib, mod);

    // ensure path has package.json
    if (!fs.existsSync(join(modPath, 'package.json'))) {
        return;
    }

    cp.spawn('npm.cmd', ['install'], {
        env: process.env,
        cwd: modPath,
        stdio: 'inherit'
    });
})
