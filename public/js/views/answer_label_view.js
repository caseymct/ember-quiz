Ember.LabelView = Ember.View.extend({
    tagName : 'label',
    attributeBindings: ["name", "value", "answeredCorrectly", "submitted"],
    templateName: 'answer-label-view',

    answerWasSelected : function() {
        return this.get("value") === this.get("selectedAnswer");
    }.property("selectedAnswer"),

    wasSubmitted : function() {
        return this.get("submitted") == true;
    }.property("submitted")
});