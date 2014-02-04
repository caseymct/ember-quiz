Ember.RadioButton = Ember.View.extend({
    tagName : "input",
    type : "radio",
    selectedAnswer: "None",
    attributeBindings : ["name", "type", "value", "checked:checked:", "selectedAnswer" ],

    click : function() {
        this.set("selection", this.$().val());
    },
    checked : function() {
        return this.get("value") == this.get("selection");
    }.property(),

    bindingChanged: function(){
        this.set("checked", this.get("selectedAnswer") == Ember.get(this, 'value'));
    }.observes("selectedAnswer")
});

