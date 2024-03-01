var input=document.getElementById("input1")

function show(val){
    input.value+=val;
}
function equal(){
    try{
    input.value=eval(input.value)
}
catch(error){
    alert("error")
}
}
function delfull(){
    input.value="";
}
function dele(){
    input.value=input.value.slice(0,-1)
}