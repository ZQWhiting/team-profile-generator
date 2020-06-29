const Team = require('./lib/Team')
const buildHtml = require('./src/build-html')


async function runProgram() {
    const team = new Team();
    await team.buildTeam(team);

    let html = buildHtml(team);

}

runProgram();