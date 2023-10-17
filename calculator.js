document.addEventListener('DOMContentLoaded',()=>{
    function add(a,b){
        return a + b
    }
    function subtract(a,b){
        return a - b
    }
    function multiply(a,b){
        return a * b
    }
    function divide(a,b){
        return a / b
    }

    let first_number;
    let operator;  
    let second_number; 

    function operate(first_number, operator,second_number){
        if (operator == "+"){
            add(first_number,second_number)
        }
        else if (operator == "-"){
            subtract(first_number,second_number)
        }
        else if (operator == "*"){
            multiply(first_number,second_number)
        }
        else{
            divide(first_number,second_number)
        }
    }
    operate(8,"+",9)
})