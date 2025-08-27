
function simulador() {
    
    const contPre = document.getElementById("pre-simulation");
    const contPost = document.getElementById("post-simulation");

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');
}

document.addEventListener('DOMContentLoaded', function(){
document.getElementById('calcular').addEventListener('click', simulador);
});