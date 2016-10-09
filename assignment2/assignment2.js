var color_choices = ["aqua", "black", "blue", "cyan", "green", "red"];
var total_guesses = 0;
var random_choice = Math.floor(Math.random() * color_choices.length);
var target = color_choices[random_choice];
var finished = false;

var check_guess = function(my_guess) {
  if (color_choices.indexOf(my_guess) == -1) {
    alert("I don’t recognize that color!")
  }
  else if (my_guess === target) {
    var bodyTag = document.querySelector('body');
    finished = true;
    return bodyTag.style.backgroundColor = target;
  }
  else {
    if (my_guess > target) {
      alert("Your input is alphabetically higher than mine!")
    }
    else {
      alert("Your input is alphabetically lower than mine!")
    }
  }
}

var do_game = function() {
  while (!finished) {
    guess = prompt("Choose a color from our list:\n" + color_choices );
    total_guesses += 1
    check_guess(guess)
  }
  setTimeout(function() { alert("You guessed it! The color was " +
                                guess +
                                "\n You took " +
                                total_guesses +
                                " tries to guess correctly. "); }, 0)
}
