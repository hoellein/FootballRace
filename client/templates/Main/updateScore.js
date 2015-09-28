/**
 * Created by don on 9/27/15.
 */

Template.updateScore.helpers({
   today:   function () {
       var now = moment().unix();
       return now;
   },
    teams:  function() {

        var teams = Teams.find().fetch();
        for(var ii=0; ii<teams.length; ii++) {
            var last = Scores.find({team: teams[ii].name}, {sort: {date: -1}, limit: 1}).fetch();
            //console.log(last);
            if(last.length > 0) {
                teams[ii].gamesPlayed = last[0].gamesPlayed;
                teams[ii].wins = last[0].wins;
                teams[ii].ties = last[0].ties;
            }
            else {
                teams[ii].gamesPlayed = 0;
                teams[ii].wins = 0;
                teams[ii].ties = 0;
            }
        }

        return teams;
    }
});

Template.updateScore.events({
    'submit form':  function(evt) {
        evt.preventDefault();
        var teams = Teams.find().fetch();
        var wins = 0;
        var ties = 0;
        var gp = 0;
        var names = '';
        var scores = [];
        for(var ii=0; ii<teams.length; ii++) {
            name = teams[ii].name;
            wins = document.getElementById('w_'+name).value;
            ties = document.getElementById('t_'+name).value;
            gp = document.getElementById('g_'+name).value;
            scores[ii] = {team: name, wins: wins, ties: ties, gamesPlayed: gp};
        }
        //console.log(scores);

        //call insert method
        Meteor.call('insertScores', scores);

        Router.go('main');
    },
    'click #btnCancel': function(evt) {
        Router.go('main');
    }
});