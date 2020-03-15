function placeOrder(orderNumber){
	console.log("Customer order : ",orderNumber);
	cookFood(function(){
		console.log("Deliver food order",orderNumber);
	});
}

function cookFood(callback){
	setTimeout(callback, 5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);