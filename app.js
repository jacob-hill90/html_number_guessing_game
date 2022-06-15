//Create random number(1-100) and save it to the variable 'num'
let num = Math.floor(Math.random()*100)

console.log(num)

//Find a way to get input saved to a variable

const guessingGame = function(){
    let guess = +document.getElementById('guess').value
    
    document.getElementById("instruct").innerHTML = '';
    if(num === guess){
        document.getElementById("feedback").innerHTML = "You got it!";
    }
    if(num > guess){
        document.getElementById("feedback").innerHTML = "Too Low";
    }
    if(num < guess){
        document.getElementById("feedback").innerHTML = "Too High";   
    }
    document.getElementById("last-num-guess").style.display = "flex"
    document.getElementById("last-guess").innerHTML = guess;
    
}
