class Calculator{
    constructor(currentOperand, previousOperand){
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.slice(0, -1);
    }

    appendNumber(number){
        if(this.currentOperand.includes('.') && number === '.'
        || this.currentOperand.length > 20)     return;
        this.currentOperand += number;
        //console.log(this.currentOperand);
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = parseFloat(this.currentOperand) + ' ' + this.operation;
        this.currentOperand = '';
    }

    updateDisplay(){
        previousOperand.innerHTML = this.previousOperand
        currentOperand.innerHTML = this.currentOperand;
    }

    compute(){
        let answer;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(curr)) return;
        switch(this.operation){
            case'+':
                answer = prev + curr
                console.log(answer);
                break;
            case'-':
                answer = prev - curr
                console.log(answer);
                break;
            case'X':
                answer = prev * curr
                console.log(answer);
                break;
            case'÷':
                answer = prev / curr
                console.log(answer);
            break;
            case'x²':
                answer = prev * prev;
                break;
            default: 
                return;
        }
        this.currentOperand = answer;
        this.operation = undefined;
    }
}
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');
const operatorButtons = document.querySelectorAll('#operator-buttons');
const numberButtons = document.querySelectorAll('#numbers > #number-button');
const allClearButton = document.getElementById('clear-button');
const deleteButton = document.getElementById('delete-button');
const equalsButton = document.getElementById('equals-button');
console.log(deleteButton);

const calculator = new Calculator(previousOperand.innerHTML, currentOperand.innerHTML);

deleteButton.addEventListener('click', () =>{
    calculator.delete();
    calculator.updateDisplay();
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerHTML);
        calculator.updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerHTML);
        calculator.updateDisplay();
    })
});
