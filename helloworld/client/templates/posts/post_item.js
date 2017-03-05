/**
 * Created by nemowen on 3/5/17.
 */
Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname + ' >>>';
    }
});