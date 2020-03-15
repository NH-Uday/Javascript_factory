function user(){
	this.name = "";
	this.life = 100;
	this.getLife = function getLife(targetPlayer){
		targetPlayer.life +=1;
		console.log(this.name + " gives life to " + targetPlayer.name );
	}
}

var bucky = new user();
var windy = new user();

bucky.name = "bucky";
windy.name = "windy";

bucky.getLife(windy);

console.log("Bucky" + bucky.life);
console.log("windy" + windy.life);

user.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercut "+targetPlayer.name);
};

windy.uppercut(bucky);

console.log("Bucky" + bucky.life);
console.log("windy" + windy.life);

user.prototype.magic = 60;
console.log(bucky.magic);
console.log(windy.magic);
