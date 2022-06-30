/*
// Example quiz object might look like:
var QUIZ = [
    {
        title: "Question 1",
        questionText: "What is the 3rd letter in the alphabet?",
        answers: [
            {text: "a", correct: false},
            {text: "b", correct: false},
            {text: "c", correct: true},
            {text: "d", correct: false}
        ],
        userAnswer: ""
    },
    {
        title: "Question 2",
        questionText: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "3", correct: true},
            {text: "682", correct: false},
            {text: "841", correct: false},
            {text: "1000", correct: false},
        ],
        userAnswer: ""
    }
]
*/

Vue.component('question', {
    template: `
    <div>
        <h2>{{ question.title }}</h2><br>
            <p>{{ question.question }}</p><br>
            <select name="Answers" v-model="answers[index]" style="margin: 10px;">
                <option></option>
                <option v-bind:value="question.answers[0].correct">{{ question.answers[0].opt1 }}</option>
                <option v-bind:value="question.answers[1].correct">{{ question.answers[1].opt1 }}</option>
                <option v-bind:value="question.answers[2].correct">{{ question.answers[2].opt1 }}</option>
                <option v-bind:value="question.answers[3].correct">{{ question.answers[3].opt1 }}</option>
            </select>

            <br>

            <button v-if="page != 1" v-on:click="previousQuestion()">Back</button>
            <button v-if="page != 5 && answers[index] != null" v-on:click="nextQuestion()">Next Question</button>
    </div>`,
    props: [
        "question",
        "index",
        "answers",
        "page",
        //"next-question",
        //"previous-question"
    ],
    methods: {
        previousQuestion: function () {
            app.previousQuestion();
        },
        nextQuestion: function () {
            app.nextQuestion();
        }
    }
})

var QUIZ = [
    {
        title: "Question 1",
        question: "What color is the sky?",
        answers: [
            {opt1: "Purple", correct: false},
            {opt1: "Red", correct: false},
            {opt1: "Blue", correct: true},
            {opt1: "Green", correct: false}
        ],
        userInput: ""
    },
    {
        title: "Question 2",
        question: "How many clouds are in the sky?",
        answers: [
            {opt1: "None, they're fake", correct: false},
            {opt1: "Probaly 14", correct: false},
            {opt1: "At least 2", correct: true},
            {opt1: "As many as you want", correct: false}
        ],
        userInput: ""
    },
    {
        title: "Question 3",
        question: "Are birds real?",
        answers: [
            {opt1: "Yes", correct: false},
            {opt1: "No", correct: true},
            {opt1: ""},
            {opt1: ""},
        ],
        userInput: ""
    },
    {
        title: "Question 4",
        question: "Are there more planes in the ocean or submarines in the sky?",
        answers: [
            {opt1: "Planes in the ocean", correct: true},
            {opt1: "Submarines in the sky", correct: false},
            {opt1: ""},
            {opt1: ""},
        ],
        userInput: ""
    },
    {
        title: "Question 5",
        question: "How tall is space?",
        answers: [
            {opt1: "14", correct: false},
            {opt1: "Taller than your mom", correct: false},
            {opt1: "Not as big as your mom", correct: true},
            {opt1: "63 miles", correct: false}
        ],
        userInput: ""
    }
]



var app = new Vue({
    el: "#app",
    data:{
        // to attach your global quiz variable to a data variable:
        myQuiz: QUIZ,
        page: 0,
        answers: []
    },
    methods:{
        // used for showing questions individually
        nextQuestion : function () {
            this.page += 1;
        },

        // used for showing questions individually
        previousQuestion : function () {
            this.page -= 1;
        },

        setPage: function (page) {
            this.page = page
        },
        
        calculateScore: function () {
            let score = 0;
            this.page = 6;
            for (bool in this.answers) {
                if (this.answers[bool] == true) {
                    score += 1;
                }
            }
            return `${score} / 5`
        },
        areAllQuestionsAnswered: function () {
            if (this.answers.length == 5) {
                return true
            }
        }
    },
    computed: {
        // a function that returns true if 0 userAnswer fields are blank ("")
        // IF there is still 1 or more blank ("") userAnswer field, return false
        
    }
});