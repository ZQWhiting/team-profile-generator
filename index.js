const Team = require('./lib/Team')

const team = new Team();

(async () => {
    await team.buildTeam(team);
    console.log(team);

    // rest of code goes here.

})();