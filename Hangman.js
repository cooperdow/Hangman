function greet()
{
    $("#hello").text("Hi " + document.form.fullName.value + "! Ready to play Hangman?");
}

function blankify()
{
    var phraseLetters = new Array();
    var phraseAsBlanks = new Array();
//    for (var i = 0; i < phraseLetters.length; i++) <--original line
      for (var i = 0; i < document.form.letters.value.length; i++)
        {
            phraseLetters.push(document.form.letters.value.substring(i, i+1));
        }
    for (var i = 0; i < document.form.letters.value.length; i++)
        {
        if(document.form.letters.value.substring(i, i+1) == " ")

            {
            phraseAsBlanks.push("-");
            }
        else
            {
            phraseAsBlanks.push("_ ");
            }
        }
    phraseAsBlanks = phraseAsBlanks.join(" ");
//    $('#test').text(phraseLetters.toString());
      $('#test2').text(phraseAsBlanks);
//       $('#test2').text(phraseAsBlanks.toString());
     
    for (var i = 0; i < phraseLetters.length; i++)
        {
        if(phraseLetters[i] === document.form.letters.value)
        //still want to check, on the line above ^, what is affected if you insert "fullName" where "letters" resides.
            {

//            $('#test2').prop('outerHTML', phraseAsBlanks);
            }
        }
}
