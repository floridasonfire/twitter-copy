Twitter.TweetsController = Ember.ArrayController.extend({
  isAdding: false,
  sortAscending: false,
  actions: {
    addNewTweet: function(){
      this.set('isAdding', true);

    },
    enterTweet: function(){
      var toDaysDate = new Date();
      this.set('isAdding', false);
      this.addObject({id: '4', body: this.body, time: toDaysDate});
      this.set('sortProperties', ['time']);
      this.set('sortDescending', true);
    },
    expand: function(){

      $('.time').show();
    },
    collapse: function(){
      $('.time').hide();
    },
  }
});
