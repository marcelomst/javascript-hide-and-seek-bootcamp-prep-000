function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget() {
   return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  var ElementsRanquedList = document.querySelectorAll('ul.ranked-list li');
  var newRank = 0;
  for (let i = 0; i < ElementsRanquedList.length; i++) {
    newRank =  parseInt(ElementsRanquedList[i].innerHTML) + n;
    ElementsRanquedList[i].innerHTML = newRank.toString();
  }
}
function deepestChild(){
  const grandnodelist = document.querySelectorAll('div#grand-node div');
  return grandnodelist[grandnodelist.length-1];
}