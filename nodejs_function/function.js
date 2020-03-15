/*var buckey = {
	favFood : "Bacon",
	favMovie : "Chappi"
};

var person = buckey;
person.favFood = "salad";
console.log(buckey.favFood);
*/
var bukey = {
	printName : function(){
			console.log("My name is bukey");
			console.log (this === bukey);
	}
};
bukey.printName();

function doSomething(){
	console.log("I am doing");
	console.log(this === global);
	
}

doSomething();