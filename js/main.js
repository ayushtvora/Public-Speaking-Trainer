openHome = () => {window.open("index.html","_self")}
openTimer = () => {window.open("timer.html","_self")}
openRecording = () => {window.open("recording.html","_self")}
openStatistics = () => {window.open("analytics.html","_self")}

let fs = require("fs");
let textByLine;
fs.readFile("doc/topics.txt", function(text){
  textByLine = text.split("\n")
  console.log(textByLine)
});
