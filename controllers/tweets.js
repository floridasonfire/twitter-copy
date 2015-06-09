Twitter.TweetsController = Ember.ArrayController.extend({
  sortAscending: false,
  isAdding: false,
  actions: {
    sortByTitle: function(){
      this.set('sortAscending', true);
    },
    addNewTweet: function(){
      this.set('isAdding', true);
    },
    enterTweet: function(){
      this.set('isAdding', false);
      this.addObject({id: '4', body: "NEW TWEET" });
    }
  }
});
