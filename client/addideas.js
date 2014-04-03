Template.addIdeas.events({
  "click #add-ideas": function() {
    var ideas = $('#idea-list').val().split('\n').map(function(idea) {
      return idea.trim();
    });

    Meteor.call('addIdeas', ideas, function(err) {
      if(err) {
        alert(err.reason);
      } else {
        alert('Ideas Added!');
      }
    });
  }
});