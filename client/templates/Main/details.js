/**
 * Created by don on 9/27/15.
 */

Template.details.helpers({
    owners: function() {
        return Owners.find();
    },
    numteams:   function(owner) {
        return Teams.find({owner: owner}).count();
    },
    results:    function(owner) {
        return "results for " + owner;
    },
    teams:  function(owner) {
        return Teams.find({owner: owner});
    },
    score:  function(team) {
        return Scores.find({team: team}, {sort: {date: 1}});
    },
    dates:  function() {
        var team = Scores.findOne().team;

        return Scores.find({team: team}, {date: 1});
    },
    gp: function(team) {
        //console.log('gp: ' + team);
        var score = Scores.find({team: team }, {sort: {date: -1}, limit: 1}).fetch();
        //console.log(score[0]);
        return score[0].gamesPlayed;
    }
});

Template.details.events({
   'click #updateScore':    function() {
       Router.go('updateScore');
   }
});