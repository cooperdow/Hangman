//var phrase = ["goosebumps", "synergy","jazz","Stay in tounch","on the dot","you don't have the guts","it's over my head","i could eat a horse", "read betweeen the lines", "my fingers are crossed","he is pulling my leg","speak of the devil","play it by ear","you can say that again","i am feeling under the weather","over my dead body","it's a small world after all","it slipped my mind","get a life","cat got your tounge","piece of cake","take a hike", "back to the grind","keep me in the loop", "schitzophrenia","better over than under"];

function greet()
{
$("#hello").text("Hi " + document.form.fullName.value + "! Ready to play Hangman?");
}

//function blankify()
//{
//    alert("l");
//    var secretWordLetters = [];
//    var tempPhrase = "Hey guys";
//    for (var i = 0, i < tempPhrase.length, i++)
//        {
//            secretWordLetters.push(tempPhrase.substring(i, i++);
//        }
//    $("#test").text("hey");
//}

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    var last  = 0;
    while (index > -1) {
      var line = remaining.substring(last, index);
      last = index + 1;
      func(line);
      index = remaining.indexOf('\n', last);
    }

    remaining = remaining.substring(last);
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}
    