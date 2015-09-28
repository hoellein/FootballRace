/**
 * Created by don on 7/6/15.
 */

Meteor.methods({
    insertScores:   function(scores) {
        console.log('Inserting scores');
        var now = moment().unix();

        for (var ii = 0; ii < scores.length; ii++) {
            var ret = Scores.insert(
                {
                    team: scores[ii].team,
                    date: now,
                    wins: scores[ii].wins,
                    ties: scores[ii].ties,
                    gamesPlayed: scores[ii].gamesPlayed
                });
        }
    }
});

