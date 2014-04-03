Authorize = function() {
  var user = Meteor.user();
  if(!user || user.username != 'arunoda') {
    throw new Meteor.Error(401, 'only arunoda is authorized to do these ops');
  }

  return true;
};