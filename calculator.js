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

    function operate(first_number, operator,second_number){
        if (operator == "+"){
            return(add(first_number,second_number))
        }
        else if (operator == "-"){
            return(subtract(first_number,second_number))
        }
        else if (operator == "*"){
            return(multiply(first_number,second_number))
        }
        else{
            return(divide(first_number,second_number))
        }
    }
    
    document.querySelectorAll(".number").forEach(element => {
        element.addEventListener("click", function()
    {
        a = document.querySelector(".events")
        a.innerHTML  = a.innerHTML + `${this.value}`
    })
    });

    document.querySelectorAll(".key-operator").forEach(element => {
        element.addEventListener("click", function()
    {
        a = document.querySelector(".events")
        a.innerHTML  = `${a.innerHTML}${this.value}`
    })
    })

    document.querySelector(".key--equal").addEventListener("click",function(){
        a = document.querySelector(".events")
        let first
        first = Array.from(a.innerText)
        console.log(first)
        let m;
        m = first.indexOf("+")
        console.log(first.slice(0,m))
        let result = operate(parseInt(first.slice(0,m).join("")), first[m], parseInt(first.slice(m+1).join("")))
        console.log(result)
        a.innerHTML  = " "+ result

    })

    document.querySelector(".clear").addEventListener("click", function(){
        document.querySelector(".events").innerHTML = ""
    })
})