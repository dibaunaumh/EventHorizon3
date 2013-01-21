

if (Meteor.isServer) {
	Meteor.startup(function() {
		console.log("EventHorizon starting...");
	});

	Meteor.publish("questions", function() {
		return Questions.find({
			for_user: this.userId
		});
	});

	Meteor.methods({
		set_content: function(user_id, source, content) {
			console.log("Receieved content from " + source + ": " + content);
		 	return "content received, thanks";
		},
		answer_question: function(user_id, question_id, answer) {
			console.log("Received answer to question " + question_id);
			var result = Meteor.call("set_content", user_id, "communicator", answer);
			return "Got: " + result;
		}

	});
}
