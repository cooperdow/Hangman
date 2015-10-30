var rand;

var revealedLetters = new Array();
function greet()
{
    $("#hello").text("Hi " + document.form.fullName.value + "! Ready to play Hangman?");
}

function blankify()
{
    string = new String();
    secretLetters = new Array();
      for (var i = 0; i < words[rand].length; i++)
        {
            secretLetters.push(words[rand].substring(i, i+1));
        }
    for (var i = 0; i <words[rand].length; i++)
        {
            revealedLetters.push("_");
            string = string + " _";
        }
    //revealedLetters = revealedLetters.join(" ");
      $('#test2').text(string);

    for (var i = 0; i < secretLetters.length; i++)
        {
        if(secretLetters[i] === document.form.letters.value)
            {

            }
        }
    }

function compWord()
{
    secretLetters=[];
    revealedLetters=[];
    rand=Math.floor(Math.random()*words.length);
    $('#test').text(words[rand]);
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
            var i = i;
            alert(i);
            revealedLetters[i] = guess;
            alert(string);
            string = "";
            for(var j = 0; j < secretLetters.length; j++)
            {

                string = string + revealedLetters[j];
            }
            alert(revealedLetters[i]);
            alert(secretLetters[i]);
            revealedLetters[i] = guess;
        }
    }
    alert(revealedLetters);
    $('#test2').text(string);
}
