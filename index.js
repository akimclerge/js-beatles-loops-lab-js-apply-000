const musicians= ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments= ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var Neww = []

function theBeatlesPlay(muscians, instruments){
  var musicianSentences = []
  
  for(var i = 0; i < muscians.length; i++){
    var newSentence = muscians[i] + " plays " + instruments[i] 
    musicianSentences[i] = newSentence;
  }
  
  return musicianSentences
}

function johnLennonFacts(facts){
  var thebeatleloop=[]
  for(var i = 0; i < facts.length; i++){
    var johnlennon = facts[i] + "!!!" 
    thebeatleloop[i] = johnlennon;
  }
  return thebeatleloop
}

function ilovethebeatles(chours){
  var ilovethebeatles =[]
  for (var i = 8; i < chours.length; i++ ){
    var chours1 = ["ilove the Beatles!"];
    ilovethebeatles[i] = chours1
    
  }
  return chours
}