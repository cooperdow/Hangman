var phrase = ["good synergy"];
function greet()
        {
        $("#hello").text("Hi " + document.form.fullName.value + "! Ready to play Hangman?");
        }
function blankify()
{
    var phraseLetters = new Array();
    var phraseAsBlanks = new Array(); 
//     var tempPhrase = "Hey guys";
    for (var i = 0; i < phraseLetters.length; i++)
        {
        phraseLetters.push(phraseLetters.substring(i, i+1));
        }
    for (var i = 0; i < phraseLetters.length; i++)
        {
        if(phrase.substring(i, i+1) == " ")
//changed above line from tempPhrase to phrase (testing how we will add the words array)
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
        if(phraseLetters[i] == document.form.fullName.value)
//changed above line from = x3 to = x2
            {
            $('#test').text(document.form.fullName.value);
            }
        }
}
