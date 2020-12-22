// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code DOES work! It is YOUR job to make it NOT to work
(of course, in case you want so)
WARNING!!! WARNING!!!
*/

names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var letters = [];
for (var thisname in names) {

  letters = names[thisname];
  var firstLetter = letters[0];

  if (firstLetter =="J" || firstLetter =="j") {
    byeSpeaker(names[thisname]);
  } else {
    helloSpeaker(names[thisname]);
  }
}