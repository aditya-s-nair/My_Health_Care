function clearScreen(){
    document.getElementById('result').value = '';
}
function display(value){
    document.getElementById('result').value += value;
}
let history = document.getElementById('history');
function calculate(){
    var p = document.getElementById('result').value;
    var q = eval(p);
    document.getElementById('result').value = q;

    para = document.createElement('p');
    data = p + "=" + eval(p);
    para.innerText = data;
    history.appendChild(para);
    return eval(p);
}