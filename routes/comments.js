Twitter.CommentsRoute = Ember.Route.extend({
  model: function(){
    return tweetComments;
  }
});
