/**
 * Created by don on 4/27/15.
 */


Meteor.startup(function() {



    // 'version' is a system name, so don't use it here as an object name to avoid confusion. Use 'ver' instead.
    // do an upsert here so it gets inserted if not present already
    SystemConfig.update(
        {type: 'version'},
        {
            type: 'version',
            ver: '0.1.0'
        },
        {upsert: true}
    );


    //if (Owners.find().count() == 0) {
        console.log(' Inserting Owners');
        Owners.update(
            {name:  'Don'},
            {
                name: 'Don',
                email: 'donhoellein@gmail.com'
            },
            {upsert: true}
        );

        Owners.update(
            {name: 'Tom'},
            {
                name: 'Tom',
                email: 'Tom.Myers@despatch.com'
            },
            {upsert: true}
        );
    //}

    console.log (' Inserting Teams');
    Teams.update(
        {name: 'Vikings'},
        {
            name:   'Vikings',
            owner:  'Tom'
        },
        {upsert: true}
    );
    Teams.update(
        {name: 'UMinn'},
        {
            name:   'UMinn',
            owner:  'Tom'
        },
        {upsert: true}
    );
    Teams.update(
        {name: 'WTAM'},
        {
            name:   'WTAM',
            owner:  'Tom'
        },
        {upsert: true}
    );
    Teams.update(
        {name: 'St Louis Park HS'},
        {
            name:   'St Louis Park HS',
            owner:  'Tom'
        },
        {upsert: true}
    );

    Teams.update(
        {name: 'Patriots'},
        {
            name:   'Patriots',
            owner:  'Don'
        },
        {upsert: true}
    );
    Teams.update(
        {name: 'MSU'},
        {
            name:   'MSU',
            owner:  'Don'
        },
        {upsert: true}
    );
    Teams.update(
        {name: 'Merrimack'},
        {
            name:   'Merrimack',
            owner:  'Don'
        },
        {upsert: true}
    );
    Teams.update(
        {name: 'Butte HS'},
        {
            name:   'Butte HS',
            owner:  'Don'
        },
        {upsert: true}
    );


/*    console.log(' Inserting Scores');

    var scoredateU = moment({y: 2015, M: 8, d: 16}).unix();
    var scoredate2U = moment({y: 2015, M:8, d: 21}).unix();

    if(Scores.find().count() == 0) {
        Scores.insert(
            {team: 'Vikings', date: scoredateU, wins: 0, ties: 0, gamesPlayed: 1}
        );
        Scores.insert(
            {team: 'Patriots', date: scoredateU, wins: 1, ties: 0, gamesPlayed: 1}
        );
        Scores.insert(
            {team: 'Vikings', date: scoredate2U, wins: 1, ties: 0, gamesPlayed: 2}
        );
        Scores.insert(
            {team: 'Patriots', date: scoredate2U, wins: 2, ties: 0, gamesPlayed: 2}
        );
    }*/

    console.log("ProjDash startup completed")
});