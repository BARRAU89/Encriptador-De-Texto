function encriptador(traducir){
    document.querySelector("#warning").removeAttribute("style");
    let textarea = document.querySelector("#texto");
    let texto = textarea.value;
    let area_default = document.querySelector("#default");
    let area_result = document.querySelector("#result");
    let texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        let out = ""
        for(let i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if(texto[i] == 'a'){
                out += traducir["a"] ;
            }
            else if(texto[i] == 'e'){
                out += traducir["e"];
            }
            else if(texto[i] == 'i'){
                out += traducir["i"]; 
            }
            else if(texto[i] == 'o'){
                out += traducir["o"]; 
            }
            else if(texto[i] == 'u'){
                out += traducir["u"]; 
            }
            else{
                out += texto[i];
            }
        }

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out.innerHTML = out;
    }

    return;

}

function desencriptador(traducir){
    document.querySelector("#warning").removeAttribute("style");
    let textarea = document.querySelector("#texto");
    let texto = textarea.value;
    let area_default = document.querySelector("#default");
    let area_result = document.querySelector("#result");
    let texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        for(let i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto = texto.replace(new RegExp(traducir["a"], "g"), "a");
        texto = texto.replace(new RegExp(traducir["e"], "g"), "e");
        texto = texto.replace(new RegExp(traducir["i"], "g"), "i");
        texto = texto.replace(new RegExp(traducir["o"], "g"), "o");
        texto = texto.replace(new RegExp(traducir["u"], "g"), "u");
        texto_out.innerHTML = texto;
    }
    return;
}

function nota(){
    let texto_out = document.querySelector("#texto_out");
    navigator.nota.writeText(texto_out.value);
}

let encriptado = document.querySelector('#encriptado');
let desencriptado = document.querySelector('#desencriptado');
let copiar = document.querySelector('#copiar');

let traducir = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

encriptado.addEventListener( 'click', function() {encriptador(traducir);} );
desencriptado.addEventListener( 'click', function() {desencriptador(traducir);} );
copiar.addEventListener( 'click', function() {nota();} );