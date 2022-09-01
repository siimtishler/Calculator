const calc = {
    val1: 0,
    val2: 0,
    val3: undefined,
    screen: undefined,
    operator : undefined
};

const numbrid = document.querySelectorAll('#number-button');
const operators = document.querySelectorAll('#operators > .single-button');
const answer = document.getElementById('screen');

numbrid.forEach(function(num_button){
    num_button.addEventListener('click', function(){
        if(calc.val1 === 0 && num_button.innerHTML == 0){
            calc.val1 = 0;
            console.log('0 juba on');
        }
        else if(calc.val1 === 0 && num_button.innerHTML != 0)
            calc.val1 = num_button.innerHTML;
        else calc.val1 = calc.val1 + num_button.innerHTML;              //if smth entered
        answer.innerHTML = calc.val1;
        console.log(calc.val1); 
    });
})



function TotalClear(){
    calc.val1 = 0;
    calc.val2 = 0;  
    calc.val_temp = undefined;
    answer.innerHTML = '0'
}

document.querySelector('#plus-minus').addEventListener('click',function(){
    if (calc.val1  != undefined){
        calc.val1  *= -1;
        console.log(calc.val1 );
        answer.innerHTML = calc.val1 ;
    }
}); 


document.querySelector('#floating-point').addEventListener('click',function(btn){
    if (calc.val1.toString().includes('.')){
    }
    else{
        calc.val1 = calc.val1 + '.';
        answer.innerHTML = calc.val1;
    }
}); 

operators.forEach(function(op_button){
    op_button.addEventListener('click', function(){
        calc.operator = op_button.id;
        if (calc.val2 == 0){
            calc.val2 = calc.val1;
            calc.val1 = 0;
            //console.log(calc.val2+ ' salvestatud');
        }
        else {
            console.log('val1=' + calc.val1);
            compute();
            calc.val1 = 0;
        }
    })
})


function compute(){
    switch(calc.operator){
        case'plus':
            console.log(calc.operator);


            calc.val2 = parseInt(calc.val1)+parseInt(calc.val2);
            console.log('vastys='+calc.val2);
            answer.innerHTML = calc.val2;
            break;
        case'minus':
            console.log(calc.operator);
            console.log('lahutame');
            break;
        case'multiply':
            console.log(calc.operator);
            console.log('korrutame');
            break;
        case'divide':
            console.log(calc.operator);
            console.log('jagame');
            break;
        case'pow':
            console.log('ruudus');
            break;
        case'sqrt':
            console.log('ruutjuur');
            break;
        case'equal':
            console.log('val1 = '+calc.val1+'  val2 = '+calc.val2, calc.operator);
            break;
        case'clear':
            //console.log('tyhjaks');
            TotalClear();
            break;  
        default: 
            return;
     }
}

