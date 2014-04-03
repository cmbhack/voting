Meteor.methods({
  "addVotes": function(email, votes) {
    var hacker = Hackers.findOne({_id: email});
    
    if(!hacker) {
      throw new Meteor.Error(400, "You've not allowed to vote!");
    }

    votes = votes.slice(0, 3);
    Hackers.update(hacker._id, {$set: {votes: votes, voted: true}});
  },

  "addHackers": function(emails) {
    Authorize();

    emails.forEach(function(email) {
      Hackers.upsert({_id: email}, {$set: {updated: new Date()}});
    });
  },

  "addIdeas": function(ideas) {
    Authorize();
    
    ideas.forEach(function(idea) {
      Ideas.insert({name: idea});
    });
  },

  "calcResults": function() {
    var allHackers = Hackers.find().fetch();
    var voteCounts = {};

    allHackers.forEach(function(hacker) {
      hacker.votes = hacker.votes || [];
      hacker.votes.forEach(function(vote) {
        voteCounts[vote] = voteCounts[vote] || 0;
        voteCounts[vote]++;
      });
    });

    var sortedVoteCounts = [];
    for(var id in voteCounts) {
      sortedVoteCounts.push({_id: id, count: voteCounts[id]});
    }

    sortedVoteCounts.sort(function(a, b) {
      return b.count - a.count;
    });

    return sortedVoteCounts;
  }
});
