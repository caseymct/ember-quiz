QuizManager.Question = DS.Model.extend({
    title: DS.attr('string'),
    selectedAnswer: DS.attr('string', {defaultValue: "None"}),
    correctAnswer: DS.attr('string'),
    questionNumber: DS.attr('int'),
    answeredCorrectly: DS.attr('bool', {defaultValue: false}),
    answers: DS.hasMany('answer', {async: true})
});

QuizManager.Answer = DS.Model.extend({
    value: DS.attr('string'),
    question: DS.belongsTo('question')
});

QuizManager.Question.FIXTURES = [
    {
        id: 1,
        questionNumber: 1,
        title: 'What is 30 + 5?',
        answers: [1, 2, 3, 0],
        correctAnswer: "35"
    },
    {
        id: 2,
        questionNumber: 2,
        title: 'What is the best bar game?',
        answers: [4, 5, 6, 7, 0],
        correctAnswer: "Ping pong"
    },
    {
        id: 3,
        questionNumber: 3,
        title: 'What is 36/6?',
        answers: [8, 9, 10, 0],
        correctAnswer: "6"
    }
];

QuizManager.Answer.FIXTURES = [
    {
        id: 0,
        value: "None"
    },
    {
        id: 1,
        value: "35"
    },
    {
        id: 2,
        value: "45"
    },
    {
        id: 3,
        value: "42"
    },
    {
        id: 4,
        value: "Darts"
    },
    {
        id: 5,
        value: "Pool"
    },
    {
        id: 6,
        value: "Ping pong"
    },
    {
        id: 7,
        value: "Pitcher throwing"
    },
    {
        id: 8,
        value: "17"
    },
    {
        id: 9,
        value: "87"
    },
    {
        id: 10,
        value: "6"
    }
];

