/**
 * Created by nemowen on 3/4/17.
 */
Meteor.publish('posts', function (author) {
    return Posts.find({author: author});
});