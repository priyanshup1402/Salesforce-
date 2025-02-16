import { LightningElement } from 'lwc';

export default class QuizAppNew extends LightningElement {

    hideStartButton = false;
    hideExitButton = true;
    isSubmitted = false;
    selected = {};
    correct ={};
    correctAnswers = 0;
    newQuestions = [];
    myQuestionsBin = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: { a: "Paris", b: "London", c: "Berlin", d: "Madrid"},
            correctAnswer: "a"
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: {a: "Earth",b: "Venus", c: "Mars", d: "Jupiter"},
            correctAnswer: "c"
        },
        {
            id: 3,
            question: "What is the largest ocean on Earth?",
            options: {a:"Atlantic Ocean", b:"Indian Ocean", c:"Arctic Ocean", d:"Pacific Ocean"},
            correctAnswer: "d"
        },
        {
            id: 4,
            question: "Who wrote 'Hamlet'?",
            options: {a:"Charles Dickens", b:"William Shakespeare", c:"Jane Austen", d:"Leo Tolstoy"},
            correctAnswer: "b"
        },
        {
            id: 5,
            question: "What is the smallest prime number?",
            options: {a:"1", b:"2", c:"3", d:"5"},
            correctAnswer: "b"
        },
        {
            id: 6,
            question: "How many continents are there on Earth?",
            options: {a:"5", b:"6", c:"7", d:"8"},
            correctAnswer: "c"
        },
        {
            id: 7,
            question:"Which gas do plants absorb from the atmosphere?",
            options: {a:"Oxygen", b:"Carbon Dioxide", c:"Nitrogen", d:"Hydrogen"},
            correctAnswer: "b"
        },
        {
            id: 8,
            question: "What is the chemical symbol for Gold?",
            options: {a:"Ag", b:"Au", c:"Pb", d:"Fe"},
            correctAnswer: "b"
        },
        {
            id: 9,
            question: "Who painted the Mona Lisa?",
            options: {a:"Vincent van Gogh", b:"Pablo Picasso", c:"Leonardo da Vinci", d:"Claude Monet"},
            correctAnswer: "c"
        },
        {
            id: 10,
            question: "What is the hardest natural substance on Earth?",
            options: {a:"Gold", b:"Iron",c: "Diamond", d:"Platinum"},
            correctAnswer: "c"
        },
        {
            id: 11,
            question: "Which country is famous for the Great Wall?",
            options: {a:"India", b:"China", c:"Japan", d:"Russia"},
            correctAnswer: "b"
        },
        {
            id: 12,
            question: "What is the main ingredient in traditional Japanese miso soup?",
            options: {a:"Soybean paste", b:"Rice", c:"Fish", d:"Tofu"},
            correctAnswer: "a"
        },
        {
            id: 13,
            question: "How many legs does a spider have?",
            options: {a:"6", b:"8", c:"10", d:"12"},
            correctAnswer: "b"
        },
        {
            id: 14,
            question: "What is the speed of light in a vacuum?",
            options: {a:"300,000 km/s", b:"150,000 km/s", c:"450,000 km/s", d:"600,000 km/s"},
            correctAnswer: "a"
        },
        {
            id: 15,
            question: "Who discovered gravity?",
            options: {a:"Albert Einstein", b:"Isaac Newton", c:"Galileo Galilei", d:"Nikola Tesla"},
            correctAnswer: "b"
        },
        {
            id: 16,
            question: "What is the national bird of the United States?",
            options: {a: "Eagle", b:"Hawk", c:"Owl", d:"Sparrow"},
            correctAnswer: "a"
        },
        {
            id: 17,
            question: "Which is the largest bone in the human body?",
            options: {a:"Femur", b:"Humerus", c:"Tibia", d:"Skull"},
            correctAnswer: "a"
        },
        {
            id: 18,
            question: "Who invented the telephone?",
            options: {a:"Alexander Graham Bell", b:"Thomas Edison", c:"Nikola Tesla", d:"James Watt"},
            correctAnswer: "a"
        },
        {
            id: 19,
            question: "Which planet is closest to the Sun?",
            options: {a:"Venus", b:"Mercury", c:"Mars", d:"Earth"},
            correctAnswer: "b"
        },
        {
            id: 20,
            question: "What is the square root of 64?",
            options: {a:"6", b:"7", c:"8", d:"9"},
            correctAnswer: "c"
        }
    ];
    

     //to shuffle and choose random 4 questions
        selectedQuestions = this.myQuestionsBin.sort(() => 0.5 - Math.random()).slice(0,4);
    
    get isScoredFull(){
        return `slds-text-heading_large ${this.selectedQuestions.length === this.correctAnswers ? 'slds-text-color_success': 'slds-text-color_error'}`;
    }

    startQuizHandler(){
        //console.log("Quiz Start Button called");
        this.hideExitButton = false;
        this.hideStartButton = true;
    }

    exitQuizHandler(){
        this.hideStartButton = false;
        this.hideExitButton = true;
    }

    handleSubmit(event){
        //console.log("Submit Button Called");
        event.preventDefault();
        this.correct = this.selectedQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = this.correct.length;
        this.isSubmitted = true;
    }


    reshuffleHanlder(){
        console.log("Reshuffle Button Called");
        this.isSubmitted = false;
        this.correct={};
        this.correctAnswers = 0;
        this.selected = {};
        this.newQuestions = this.myQuestionsBin.sort(() => 0.5 - Math.random()).slice(0,4);
        this.selectedQuestions = this.newQuestions;
    }

    

    changeHandler(event){
        let {name, value} = event.target;
        this.selected = {...this.selected, [name]:value};
    }

    get notAllSelected(){
        return !(Object.keys(this.selected).length === this.selectedQuestions.length);
    }
}