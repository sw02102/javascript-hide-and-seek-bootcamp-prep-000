function getFirstSelector(selector){
   return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector(".target");
}
function deepestChild(){
  const divs = document.getElementById("grand-node").querySelectorAll("div");
  return divs[divs.length-1];
}
function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list');
  var liss = [];
  for (let i = 0, l = lis.length; i < l; i++) {
  liss[i] = lis[i].parseInt+n;
  lis[i].innerHTML = liss[i].toString()
  }
  
}
