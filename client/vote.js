Template.vote.helpers({
  ideas: function() {
    return Ideas.find();
  }
});

Template.vote.events({
  "click #vote-now": function() {
    var email = $('#email').val();
    var vote1 = $('#vote1').val();
    var vote2 = $('#vote2').val();
    var vote3 = $('#vote3').val();

    Meteor.call('addVotes', email, [vote1, vote2, vote3], function(err) {
      if(err) {
        alert(err.reason);
      } else {
        alert("Thanks. Your vote has been added!")
      }
    });
  }
})