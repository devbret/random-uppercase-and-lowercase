function main() {
    //Primary program variables.
    const userInput = document.querySelector(`#userInput`);
    const submit = document.querySelector(`#submit`);
    const output = document.querySelector(`#output`);
    //Where the main action takes place, once the Submit button has been pressed.
    submit.addEventListener(`click`, function(){
        //Making sure the user has added text to the input field, before attempting to process any data.
        if (userInput.value.length > 0) {
            //Primary function for processing the user's input.
            function randomCase(){
                //Returns the split, reduced and joined results from user input.
                return userInput.value.split(``).reduce((t,d) => {
                    //Chooses a random number between 0 and 1;
                    const rN = Math.random();
                    let temp;
                    //If the number is less than .5, then the temp (string) value is made lowercase, otherwise it is made uppercase.
                    (rN <= .5) ? temp = d.toLowerCase() : temp = d.toUpperCase();
                    t.push(temp);
                    //The string character/value is pushed to the new total from within the reduce method.
                    return t;
                }, []).join(``);
            }
            //Finally, the inner text of the output variable receives the results from this randomCase function.
            output.innerText = randomCase();
        }
    });
}
main();