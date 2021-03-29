var name ="MooMoo";
var age = 18;
var isBoy = true;
var fruit = ["apple","banana","peach"];


alert(name);
alert(age);
alert(isBoy);
alert(fruit[2]);

function addition(age){
	return age+10;
}
var trueage= addition(age);
alert(trueage);

var age2 = 15;
function addition(age2){
	return age2+10;
}
var trueage2= addition(age2);
alert(trueage2);


function test(){
	a = 123;
	var b = 456;
	if (a == 123) var c = 789;
}

document.getElementById("byid").innerHTML = "我來自Id";
document.getElementById("byid").style.color = "blue";

document.getElementsByClassName("byclass")[0].innerHTML = "我來自Class";
document.getElementsByClassName("byclass")[0].style.fontSize="30px";

document.getElementsByTagName("div")[2].innerHTML = "我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily = "微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML = "MMM4x4ever";
document.getElementsByTagName("P")[0].style.color = "red";
document.getElementsByTagName("P")[0].style.fontSize = "30px"
