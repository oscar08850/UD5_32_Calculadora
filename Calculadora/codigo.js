
function num(num) {
    document.getElementById("resultado").value+=num;
return num;
}

function del(){
    document.getElementById("resultado").value="";
}

function igual(){
    document.getElementById("resultado").value = eval(document.getElementById("resultado").value);

}