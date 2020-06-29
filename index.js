const Team = require('./lib/Team')

async function runProgram() {
    const team = new Team();
    await team.buildTeam(team);
    console.log(team);
    // rest of code goes here.


}

runProgram();