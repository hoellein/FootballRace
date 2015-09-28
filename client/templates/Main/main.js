/**
 * Created by don on 9/27/15.
 */

Template.main.helpers({
    owners: function() {
        return Owners.find();
    },
    score:  function(owner) {
        var teams = Teams.find({owner: owner}).fetch();
        var last = [];
        var wins = 0;
        var ties = 0;
        for(var ii=0; ii<teams.length; ii++) {
            last = Scores.find({team: teams[ii].name}, {sort: {date: -1}, limit: 1}).fetch();
            wins += parseInt(last[0].wins);
            ties += parseInt(last[0].ties);
            //console.log('score: ' + teams[ii].name + ' w: ' + last[0].wins + ' t: ' + last[0].ties);
        }

        var score = (wins * 2) + (ties * 1);
        return score;
    }
})