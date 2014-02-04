QuizManager.QuestionController = Ember.ObjectController.extend({
    needs: "quizmanager",

    setSelectedAnswer: function(key, value) {
        var model = this.get('model');

        if (value != undefined) {
            model.set('selectedAnswer', value);
            model.save();
        }
        return model.get('selectedAnswer');
    }.property('model.selectedAnswer'),

    getName: function(key, value){
        return this.get('model').get('title').replace(/ /g, "_");
    }.property()
});