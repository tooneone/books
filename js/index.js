var selectColor=document.getElementById("colorSelect");
var body=document.getElementsByTagName("body")[0]
var options=selectColor.children;
console.log()
selectColor.onchange=function(){
	console.log(this.value);
	body.style.color=this.value;
}
