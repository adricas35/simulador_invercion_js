
function simulador() {
   
    const contPre = document.getElementById("pre-simulation");
    const contPost = document.getElementById("post-simulation");

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');


//Variables que capturan los valores de los campos
    let cNombres = document.getElementById('nombres').value;
    let cTelefono = document.getElementById('telefono').value;
    let cEmail = document.getElementById('email').value;
    let cMonto = document.getElementById('monto').value;
    let cTiempo = document.getElementById('tiempo').value;




//Constantes que capturan las etiquetas span en las que se muestran los valores por eso la s de show 
    const sTiempo = document.getElementById('sTiempo');
    const sInteres = document.getElementById('sInteres');
    const sTotal = document.getElementById('sTotal');
    const sGanancia = document.getElementById('sGanancia');
    const sNombres = document.getElementById('sNombres');
    const sCorreo = document.getElementById('sCorreo');



//Variables para realizar los calculos 
let ganancia = 0;
let total = 0;

//Calcular el valor 
    switch (cTiempo) {
        //En este case realizaremos el calculo si el tiempo corresponde a un año
        case '1': ganancia = (cMonto * 0.008)*12;
        total = parseInt (cMonto) + parseInt (ganancia);
        sInteres.textContent = '0.8%';
        sTiempo.textContent = '12 Meses';
            break;

        //En este case realizaremos el calculo si el tiempo corresponde a dos años  
        case '2': ganancia = (cMonto * 0.013)*24;
        total = parseInt (cMonto) + parseInt (ganancia);
            break;

        //En este case realizaremos el calculo si el tiempo corresponde a tres años
        case '3': ganancia = (cMonto * 0.017)*36;
        total = parseInt (cMonto) + parseInt (ganancia);
            break; 
            
        
    }
        sTotal.textContent= total;
        sGanancia.textContent= ganancia;
        sNombres.textContent= cNombres;
        sCorreo.textContent= cEmail;

    

   



}



document.addEventListener('DOMContentLoaded', function(){
document.getElementById('calcular').addEventListener('click', simulador);
});