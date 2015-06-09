Twitter.TweetsController = Ember.ArrayController.extend({
  isAdding: false,
  sortAscending: false,
  actions: {
    addNewTweet: function(){
      this.set('isAdding', true);

    },
    enterTweet: function(){
      var toDate = new Date();
      this.set('isAdding', false);
      this.addObject({id: '4', body: this.body, time: toDate});
      this.set('sortProperties', ['time']);
      this.set('sortDescending', true);
    }
  }
});
