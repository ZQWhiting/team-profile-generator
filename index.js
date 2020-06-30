const Team = require('./lib/Team')
const buildHtml = require('./src/build-html')
const writeFile = require('./src/write-file')


async function runProgram() {
    const team = new Team();
    await team.buildTeam(team);

    let html = buildHtml(team);

    writeFileResponse = await writeFile(html);

    console.log(writeFileResponse.message);
    console.log(team)
}

runProgram();