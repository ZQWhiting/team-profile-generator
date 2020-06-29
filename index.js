const Team = require('./lib/Team')

const team = new Team();

(async () => {
    await team.startBuild();
    console.log(team);

    // rest of code goes here.

})();