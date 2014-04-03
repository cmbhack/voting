Meteor.publish("ideas", function() {
  return Ideas.find();
});

Meteor.publish("hackers", function() {
  return Hackers.find();
});

Hackers.allow({
  insert: function() {
    return Authorize();
  }
});