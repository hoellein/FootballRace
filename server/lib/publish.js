/**
 * Created by don on 4/27/15.
 */

Meteor.publish('owners', function() {
    return Owners.find({});
});

Meteor.publish('teams', function() {
    return Teams.find({});
});

Meteor.publish('scores', function() {
    return Scores.find({});
});

Meteor.publish('systemConfig', function() {
    return SystemConfig.find({});
})