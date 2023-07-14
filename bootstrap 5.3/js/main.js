

var randomNumber = -1;
function generateQuote(){
    var quoteOutput = [
        {author: "Epictetus", quote: "It's not what happens to you, but how you react to it that matters."},
        {author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken."},
        {author: "Marilyn Monroe", quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."},
        {author: "Oppenheimer", quote: "Now, I've become death, the destroyer of worlds."},
        {author: " Mahatma Gandhi", quote: "Be the change that you wish to see in the world."}
    ]
    var newRandomNumber = Math.floor(Math.random() * quoteOutput.length);
    while (randomNumber === newRandomNumber) {
        newRandomNumber = Math.floor(Math.random() * quoteOutput.length);
    }
    randomNumber = newRandomNumber;
    document.getElementById('quoteOutput').innerHTML = `"${quoteOutput[randomNumber]["quote"]}"`
    document.getElementById('authorOutput').innerHTML = quoteOutput[randomNumber]["author"]
}

 