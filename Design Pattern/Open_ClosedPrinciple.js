//without open/closed pricnciple
// function should be open for extension but closed for modification


function QuestionQuiz(questions) {
    questions.forEach(question => {
        switch (question.type) {
            case "Javascript": {
                console.log(question.description);
                break
            }
            case "JavascriptIntermediate": {
                console.log(question.description)
                break
            }
            // adding one case breaking rule 
            case "JavascriptProgram": {
                console.log(question.description)
                break
            }
            default: {
                console.log('no ext seleected')
                break
            }
        }
    });

}


let questions = [
    {
        type: 'Javascript',
        description: 'This is basic of JS'
    },
    {
        type: 'JavascriptIntermediate',
        description: 'This is intermediate of JS'
    },
    //adding one question so need to add in switch also
    {
        type: 'JavascriptProgram',
        description: 'This is Program of JS'
    }
]

QuestionQuiz(questions)

// now suppose we have to add one more question so we are modyfying the function hence breaking the principle


// so what we do is we make each class for a particular question and then display it  or add inheritence
// we can open for extensu=ion but modification of calss we will not do 

//example

class JavascriptBeg{
    constructor(description){
        this.description=description
    }
    descriptionVal (){
        console.log(this.description)
    }
}

class JavascriptInt{
    constructor(description){
        this.description=description
    }
    descriptionVal (){
        console.log(this.description)
    }
}

class JavascriptAdvanc{
    constructor(description){
        this.description=description
    }
    descriptionVal (){
        console.log(this.description)
    }
}

let newQuestions=[
    new JavascriptBeg('This is basic of JS'),
    new JavascriptInt('This is intermediate of JS'),
    new JavascriptAdvanc('This is advance of JS')
]

function printNewQuix(questions){
    questions.forEach(ele=>{
        ele.descriptionVal()
    })
}

printNewQuix(newQuestions)

// now here if u add a new question u just create a new class add thats it not modify anything