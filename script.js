//don' know function
function dontknow() {
  var randomChoice = Math.random();
  
  if (randomChoice <= 0.11) {
    $('#nextStep').empty();
    $('#nextStep').append(tempPthn.clone());
  } 
  if (randomChoice >= 0.12 && randomChoice < 0.23) {
    $('#nextStep').empty();
    $('#nextStep').append(java.clone());
  } 
  if (randomChoice >= 0.23 && randomChoice < 0.34) {
    $('#nextStep').empty();
    $('#nextStep').append(cSharp.clone());
  } 
  if (randomChoice >= 0.34 && randomChoice < 0.45) {
    $('#nextStep').empty();
    $('#nextStep').append(cplus.clone());
  } 
  if (randomChoice >= 0.45 && randomChoice < 0.56) {
    $('#nextStep').empty();
    $('#nextStep').append(objc.clone());
  } 
  if (randomChoice >= 0.56 && randomChoice < 0.67) {
    $('#nextStep').empty();
    $('#nextStep').append(oneRing.clone());
  } 
  if (randomChoice >= 0.67 && randomChoice < 0.78) {
    $('#nextStep').empty();
    $('#nextStep').append(jvscrpt.clone());
  } 
  if (randomChoice >= 0.78 && randomChoice < 0.89) {
    $('#nextStep').empty();
    $('#nextStep').append(rb.clone());
  } 
  if (randomChoice >= 0.88 && randomChoice <= 1.00) {
    $('#nextStep').empty();
    $('#nextStep').append(ph.clone());
  } 
}

//hidden divs
 var tempPthn = $('#pthn').detach();
 var cSharp = $('#cSharp').detach();
 var java = $('#java').detach();
 var ideaVar = $('#idea').detach();
 var userChoice = $('#idea2').detach();
 var userChoice2 = $('#idea3').detach();
 var cplus = $('#cPlusPlus').detach();
 var mqs = $('#mobileStep').detach();
 var objc = $('#objectiveC').detach(); 
 var oneRing = $('#ccc').detach(); 
 var mm = $('#makeMoney').detach();
 var no = $('#nope').detach();
 var cr = $('#car').detach();
 var real = $('#realtime').detach();
 var jvscrpt = $('#javascript').detach();
 var nw = $('#new').detach();
 var ty = $('#toy').detach();
 var rb = $('#ruby').detach();
 var ph = $('#php').detach();
 var entr = $('#microsoft').detach();
 var bof = $('#end').detach();
 var big = $('#tech').detach();
 var prgs = $('#progress').detach();
//end hidden divs
function kids() {
    $('#nextStep').empty();
    $('#nextStep').append(tempPthn.clone());
}
function idea() {
  $('#nextStep').empty();
  $('#nextStep').append(ideaVar.clone());
  //$('#nextStep2').append(prgs.clone());
}
function userChoiceYes() {
    $('#nextStep').empty();
    $('#nextStep').append(userChoice.clone());
}
function userChoiceNo() {
    $('#nextStep').empty();
    $('#nextStep').append(no.clone());
}
function gaming() {
  $('#nextStep').empty();
  $('#nextStep').append(cplus.clone());
  //$('#nextStep2').html('<p>test</p>'); 
}
function mobile() {
  $('#nextStep').empty();
  $('#nextStep').append(mqs.clone());
}
function ios() {
  $('#nextStep').empty();
  $('#nextStep').append(objc.clone());
}
function android() {
  $('#nextStep').empty();
  $('#nextStep').append(java.clone());
}
function money() {
	$('#nextStep').empty();
  $('#nextStep').append(mm.clone());
}
function job(){
  $('#nextStep').empty();
  $('#nextStep').append(userChoice.clone());
}
function job2(){
  $('#nextStep').empty();
  $('#nextStep').append(userChoice2.clone());
}
function easyWay(){
    $('#nextStep').empty();
    $('#nextStep').append(tempPthn.clone());
}
function bestWay(){
    $('#nextStep').empty();
    $('#nextStep').append(tempPthn.clone());
}
function hardWay(){
    $('#nextStep').empty();
    $('#nextStep').append(cr.clone());
}
function reallyHardWay(){
    $('#nextStep').empty();
    $('#nextStep').append(cplus.clone());
}
function manual(){
    $('#nextStep').empty();
    $('#nextStep').append(oneRing.clone());
}
function auto(){
    $('#nextStep').empty();
    $('#nextStep').append(java.clone());
}
function web() {
  $('#nextStep').empty();
  $('#nextStep').append(real.clone());
}
function web2() {
  $('#nextStep').empty();
  $('#nextStep').append(bof.clone());
}
function realTimeYes (){
  $('#nextStep').empty();
  $('#nextStep').append(jvscrpt.clone());
}
function realTimeNo (){
  $('#nextStep').empty();
  $('#nextStep').append(nw.clone()); 
}
function toy() {
  $('#nextStep').empty();
  $('#nextStep').append(ty.clone()); 
}
function ruby() {
  $('#nextStep').empty();
  $('#nextStep').append(rb.clone()); 
}
function php() {
  $('#nextStep').empty();
  $('#nextStep').append(ph.clone()); 
}
function ent() {
  $('#nextStep').empty();
  $('#nextStep').append(entr.clone());
}
function ent2() {
  $('#nextStep').empty();
  $('#nextStep').append(cSharp.clone());
}
function giant () {
  $('#nextStep').empty();
  $('#nextStep').append(big.clone());
}

$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 20, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    }
  );
$(".dropdown-content").css("color", "black");
