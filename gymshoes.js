function placeAnOrder(ordernumber){
    console.log("Customer order", ordernumber);
    
    pairofgymshoes(function(){
        console.log("Deliver gym shoes", ordernumber);
    });
    
    
    
}
//Simulate a 5 second operation
function pairofgymshoes(callback){
    setTimeout(callback, 5000);
}

//Simulate user web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);