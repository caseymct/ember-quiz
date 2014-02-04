QuizManager.QuizmanagerController = Ember.ArrayController.extend({
    title: "An enjoyable quiz",
    submitted: false,
    actions: {
        submitAction : function(reset) {
            var questions = this.store.all('question');
            questions.forEach(function(question) {
                if (reset) {
                    question.set('selectedAnswer', "None");
                }
                question.set('answeredCorrectly', question.get('selectedAnswer') == question.get('correctAnswer'));
            });

            this.set('submitted', !reset);
        }
    },
    correctAnswers: function() {
        return this.filterBy('answeredCorrectly', true).get('length');
    }.property('@each.answeredCorrectly'),

    totalQuestions: function() {
        return this.store.all('question').get('length');
    }.property()
});