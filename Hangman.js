var rand;
var secretWordLetters = new Array();
var revealedLetters = new Array();
function greet()
{
    $("#hello").text("Hi " + document.form.fullName.value + "! Ready to play Hangman?");
}

function blankify()
{
      for (var i = 0; i < words[rand].length; i++)
        {
            secretWordLetters.push(words[rand].substring(i, i+1));
        }
    for (var i = 0; i <words[rand].length; i++)
        {
            revealedLetters.push("_");
        }
    revealedLetters = revealedLetters.join(" ");
      $('#test2').text(revealedLetters);
     
    for (var i = 0; i < secretWordLetters.length; i++)
        {
        if(secretWordLetters[i] === document.form.letters.value)
            {

            }
        }
    }

function compWord()
    {
    rand=Math.floor(Math.random()*words.length);
        alert(words[rand])
    blankify();
    }


function guess()
{
    var guess = document.form2.letter.value;
    alert(guess);
    for(var i =0; i< secretWordLetters.length; i++)
    {
        if (guess === secretWordLetters.get(i))
        {
            guess.replace("_", guess)
        }
    }
}