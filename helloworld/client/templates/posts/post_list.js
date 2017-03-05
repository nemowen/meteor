/**
 * Created by nemowen on 3/5/17.
 */
Template.postsList.helpers({
    posts: function(){
        return Posts.find();
    }
});
