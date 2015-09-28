/**
 * Created by don on 9/27/15.
 */

Template.registerHelper('formatTime', function(time, type) {
    var str = '';
    switch (type) {
        case 'fromNow':
            str = moment.unix(time).fromNow();
            break;
        case 'iso':
            str = moment.unix(time).toISOString();
            break;
        case 'long':
            str = moment.unix(time).format('LLLL');
            break;
        case 'month':
            str = moment.unix(time).format('MM/DD');
            break;
        default:
            str = moment.unix(time).format('YYYY-MM-DD');
            break;
    }
    if (str == 'Invalid date') str = 'TBD';
    return str;
});