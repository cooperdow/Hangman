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
    for(var i = 0; i< secretLetters.length; i++)
    {
        if (guess === secretLetters[i])
        {
            var i = i;
            revealedLetters[i] = guess;
            string = "";
            for(var j = 0; j < secretLetters.length; j++)
            {

                string = string + revealedLetters[j] + " ";
            }
            revealedLetters[i] = guess;
        }


    }

    $('#test2').text(string);
}
