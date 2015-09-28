/**
 * Created by don on 8/21/15.
 */

Template.configPage.rendered = function() {
    var el = document.getElementsByClassName('pill');
    for(var ii=0; ii<el.length; ii++) {
        el[ii].className -= 'active';
    }
    document.getElementById('pillConfig').className += ' active'; // note the space in the string

};

