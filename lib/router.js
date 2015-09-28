/**
 * Created by don on 4/23/15.
 */
Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('owners'); }
});

Router.map(function () {
    /*this.route('PDmain', {
        path: '/',
        template: 'PDmain',
        //data: function() {
        //    var curproj = Session.get("projName");
        //    var dash =  Dash.find({projId: curproj}, {sort: {createDate: -1}, limit: 1}).fetch();
        //    return dash;
        //}
        subscriptions: function() {
            console.log('  in route PDmain');
            return Meteor.subscribe("dash1", Session.get('projName'));
        }
    });*/
    this.route('main', {
        path: '/',
        template: 'main',
        subscriptions: function() {
           return [Meteor.subscribe('owners'),
                Meteor.subscribe('teams'),
                Meteor.subscribe('scores'),
                Meteor.subscribe('systemConfig')];
        },
        data:   function() {
            return Owners.find();
        }
    });
    this.route('updateScore', {
        path: '/updateScore',
        template:   'updateScore',
        subscriptions:  function() {
            return [Meteor.subscribe('teams'),
                Meteor.subscribe('scores')];
        },
        data:   function() {
            return Teams.find();
        }
    })

});


// always reset the Report date, except in the 'project' route
// This ensures background color doesn't stay set for the 'old' report
/*
Router.onBeforeAction(
    resetReportDate, {
        except: ['project']
    }
);
*/

/*
function resetReportDate() {
    console.log('  resetReportDate');
    Session.set('reportDate', 'current');
    document.getElementById('main').style.backgroundColor = "#f5f5f5";

    this.next();    // needed to continue
};
*/
