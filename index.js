function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget() {
   return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  var ElementsRanquedList = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ElementsRanquedList.length; i++) {
   ElementsRanquedList[i].innerHTML =  (parseInt(ElementsRanquedList[i].innerHTML) + n).toString();
  }
}
function deepestChild(){
  const grandnodelist = document.querySelectorAll('div#grand-node div');
  return grandnodelist[grandnodelist.length-1];
}