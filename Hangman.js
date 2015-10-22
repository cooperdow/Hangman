var phrase = ["good synergy"];

$("#nameButton").on("click", function()
    {
      $("#hello").text("Hi " + document.form.fullName.value + "! Ready to play Hangman?");
    });

function blankify()
{
    var phraseLetters = new Array();
    var phraseAsBlanks = new Array(); 
    var tempPhrase = "Hey guys";
    for (var i = 0; i < phraseLetters.length; i++)
        {
        phraseLetters.push(phraseLetters.substring(i, i+1));
        }
    for (var i = 0; i < phraseLetters.length; i++)
        {
        if(tempPhrase.substring(i, i+1) == " ")

            {
            phraseAsBlanks.push("/");
            }
        else
            {
            phraseAsBlanks.push("_ ");
            }
        }
    $('#test').text(phraseLetters);
    $('#test2').append(phraseAsBlanks);
    for (var i = 0; i < phraseLetters.length; i++)
        {
        if(phraseLetters[i] === document.form.fullName.value)
            {
            $('#test').text(document.form.fullName.value);
            }
        }
}
