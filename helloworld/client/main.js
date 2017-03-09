Meteor.startup(function() {
    // create a computation
    Tracker.autorun(function() {
        console.log('There are ' + Posts.find().count() + ' posts');
    });
});
