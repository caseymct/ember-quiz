QuizManager.Router.map(function() {
    this.resource('quizmanager', { path: '/' }, function() {
        this.route('questions', { path: '/' });
    });
});

QuizManager.QuizmanagerRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('question');
    }
});

QuizManager.QuizmanagerQuestionsRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('quizmanager');
    }
});