var rand;

var revealedLetters = new Array();
function greet()
{
    $("#hello").text("Hi " + document.form.fullName.value + "! Ready to play Hangman?");
}

function blankify()
{
    secretLetters = new Array();
      for (var i = 0; i < words[rand].length; i++)
        {
            secretLetters.push(words[rand].substring(i, i+1));
        }
    for (var i = 0; i <words[rand].length; i++)
        {
            revealedLetters.push("_");
        }
    revealedLetters = revealedLetters.join(" ");
      $('#test2').text(revealedLetters);
     
    for (var i = 0; i < secretLetters.length; i++)
        {
        if(secretLetters[i] === document.form.letters.value)
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
    alert(secretLetters);
    for(var i = 0; i< secretLetters.length; i++)
    {
        if (guess === secretLetters[i])
        {
            alert(secretLetters[i]);
            alert(revealedLetters.indexOf(secretLetters[i]));
            revealedLetters.replace(revealedLetters.indexOf(i),secretLetters[i]);
        }
    }
    alert(revealedLetters);
    $('#test2').text(revealedLetters);
}
