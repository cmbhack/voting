Template.results.helpers({
  results: function() {
    return Session.get('results');
  },

  getIdeaName: function() {
    var idea = Ideas.findOne(this._id);
    if(idea) {
      return idea.name;
    }
  }
});

Template.results.events({
  "click #update-results": function() {
    console.log('==============');
    Meteor.call('calcResults', function(err, results) {
      if(err) {
        alert(err.reason);
      } else {
        Session.set('results', results);
      }
    });
  }
});