const text = ['websites', 'illustrations', 'applications'];
let count = 0;              // counts the word in the array
let index = 0;              // counts the individual letters in the word(count) selected
let currentText = '';       // This is the current word that is being grabbed from the array
let letter = '';            // This is the current individual letter being grabbed from the currentText

// For the function to run immediately we are going to use a "iffy" (a self invoked function), we grab it using ()s outside the function

(function type() {
    if(count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300);
}());

