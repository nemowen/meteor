/**
 * Created by nemowen on 3/6/17.
 */
Template.postSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            author: 'nemo'
        };

        Meteor.call('postInsert', post, function (error, result) {
            if (!!error) {
                return alert(error.reason)
            }

            if (result.postExists) {
                alert('This link has already been posted. (该链接已经存在)')
            }

            Router.go('postPage', {_id: result._id});

        })
        post._id = Posts.insert(post);
        Router.go('postPage', post);
    }
})