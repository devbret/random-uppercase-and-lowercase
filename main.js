function main() {
    //Primary program variables.
    const userInput = document.querySelector(`#userInput`);
    const submit = document.querySelector(`#submit`);
    const output = document.querySelector(`#output`);
    //Where the main action takes place via an event listener, once the Submit button has been pressed.
    submit.addEventListener(`click`, function(){
        //Making sure the user has added text to the input field, before attempting to process any data.
        if (userInput.value.length > 0) {
            //The output variable's inner text becomes the split, reduced and joined results from the user's input.
            output.innerText = userInput.value.split(``).reduce((t,d) => {
                //Chooses a random number between 0 and 1;
                const rN = Math.random();
                //If the number is less than .5, then the temp (string) value is made lowercase, otherwise it is made uppercase.
                let temp = (rN <= .5) ? d.toLowerCase() : d.toUpperCase();
                //The string character/value is pushed to the new total from within the reduce method.
                t.push(temp);
                //The total value is returned.
                return t;
            }, []).join(``);
        }
    });
}
main();
