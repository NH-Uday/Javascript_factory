var person = {
	firstname : "nahin",
	lastname : "uday",
	age : 25
};
console.log(person);

function addNumber(a,b){
	return a + b; 
}
console.log(addNumber(3,9));

var printBacon = function(){
	console.log("Bacon is healthy.");
}
printBacon();
setTimeout (printBacon, 5000);
