function aparecer(el){
    var display = document.getElementById(el).style.display;
    if(display == "none"){
    document.getElementById(el).style.display = 'block';
}else{

    document.getElementById(el).style.display = 'none';
}
}

function aparecer1(el){
    var display = document.getElementById(el).style.display;
    if(display == "none"){
    document.getElementById(el).style.display = 'block';
}else{
    document.getElementById(el).style.display = 'none';
}
}

function aparecer2(el){
    var display = document.getElementById(el).style.display;
    if(display == "none"){
    document.getElementById(el).style.display = 'block';
}else{
    document.getElementById(el).style.display = 'none';
}
}

<button id="btm1" type="button" onclick="aparecer1('pape1');">---</button>

