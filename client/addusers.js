Template.addUsers.events({
  "click #add-users": function() {
    var emails = $('#user-list').val().split('\n').map(function(email) {
      return email.trim();
    });
    
    Meteor.call('addHackers', emails, function(err) {
      if(err) {
        alert(err.reason);
      } else {
        alert('Hackers Added!');
      }
    });
  }
});