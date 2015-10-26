var rand;

function greet()
{
    $("#hello").text("Hi " + document.form.fullName.value + "! Ready to play Hangman?");
}

function blankify()
{
    var phraseLetters = new Array();
    var phraseAsBlanks = new Array();

      for (var i = 0; i < words[rand].length; i++)
        {
            phraseLetters.push(words[rand].substring(i, i+1));
        }
    for (var i = 0; i <words[rand].length; i++)
        {
        if(words[rand].substring(i, i+1) == " ")

            {
            phraseAsBlanks.push("-");
            }
        else
            {
            phraseAsBlanks.push("_");
            }
        }
    phraseAsBlanks = phraseAsBlanks.join(" ");

      $('#test2').text(phraseAsBlanks);
     
    for (var i = 0; i < phraseLetters.length; i++)
        {
        if(phraseLetters[i] === document.form.letters.value)
            {

//            $('#test2').prop('outerHTML', phraseAsBlanks);
            }
        }
    }

function compWord()
    {
    rand=Math.floor(Math.random()*words.length);
    alert(words[rand]);
    blankify();
    }