document.addEventListener('DOMContentLoaded', ()=>{
       const numberButtons = document.querySelectorAll('button[data-action="number"]');
       const operatorbuttons = document.querySelectorAll('button[data-action="add"] , button[data-action="divide"] , button[data-action="multiply"] , button[data-action="subtract"]')
       const screen = document.querySelector('.screen');
        let number_array = []; // Initialize the variable to store the number in the form of array
       
        

        // Add a click event listener to each number button
        numberButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Append the button's text (number) to the 'number' variable
                 number_array.push(button.textContent);
                 let number = parseInt(number_array.map(String).join(''), 10);
                 screen.innerHTML = number;
                console.log(number_array);
            });
        });
        operatorbuttons.forEach(button => {
            button.addEventListener('click',() =>{
                screen.innerHTML = button.textContent;
            })
        })

})

