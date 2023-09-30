var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)]; 
/* Math.random() returns a A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
e.g. returns 0; 0*4 = 0, floor of 0 = 0 or HTML
e.g. returns .26; .26*4 = 1.02, floor of 1.02 = 1 or CSS
e.g. returns .5; .5*4 = 2, floor of 2 = 2 or Git
e.g. returns .8; .8*4 = 3.2 floor of 3 = 3 or JavaScript
*/

function listTopics() {
  for (i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
} 



function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();