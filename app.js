var cookies = parseInt(document.getElementById('nOC').value);
var cursors = 0;
var grandmothers = 0;
var ImpossibleThing = 0;
var cPC = 1;
var cPS = 0;
var savegame = {
    cookies: cookies,
    cursors: cursors,
    grandmothers: grandmothers,
    ImpossibleThing: ImpossibleThing
};
var savegame = JSON.parse(localStorage.getItem("save"));
function saveButton(){}
function deleteSave(){}
function incrementValue(number) {
	cookies += number;
	return document.getElementById('nOC').value = cookies;
}
/* upgrade method */
function buyUpg1(){
	document.getElementById('bC').innerHTML = "Buy a cursor for " + upgradeCost + " cookies";
	var upgradeCost = Math.floor(10 * Math.pow(1.1, cursors));
	if (cookies >= upgradeCost) {
		cursors += 1;
		cookies -= upgradeCost;
		document.getElementById('aOC').innerHTML = cursors;
		document.getElementById('nOC').value = cookies;
		upgradeCost = Math.floor(10 * Math.pow(1.1, cursors));
		cPS += 0.5;
	}else if(upgradeCost >= cookies){
		alert("You do not have enough cookies to buy this upgrade");
	}
	console.log("upgradeCost:", upgradeCost)
	document.getElementById('bC').innerHTML = "Buy a cursor for " + upgradeCost + " cookies";
}
function buyUpg2(){
	document.getElementById('bC').innerHTML = "Buy a cursor for " + upgradeCost + " cookies";
	var upgradeCost = Math.floor(50 * Math.pow(1.1, grandmothers));
	if (cookies >= upgradeCost) {
		grandmothers += 1;
		cookies -= upgradeCost;
		document.getElementById('aOG').innerHTML = cursors;
		document.getElementById('nOG').value = cookies;
		upgradeCost = Math.floor(50 * Math.pow(1.1, grandmothers));
		cPS += 0.5;
	}else if(upgradeCost >= cookies){
		alert("You do not have enough cookies to buy this upgrade");
	}
	console.log("upgradeCost:", upgradeCost)
}
/* cPS  Method */
setInterval(function(){
	cookies += cPS;
	document.getElementById('nOC').value = cookies;
},1000);
/* Easter Egg Maker */
function easterEgg(number){
	alert("You have found easter egg number " + number + "!");
	alert("A 50% boost has been added to your clicks!");
	cPC = cPC * 1.5;
};