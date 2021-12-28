var time = 200;
var slideIndex = 1;
showSlides(slideIndex);


function trocarSlide(n) {
    showSlides(slideIndex += n);
    console.log(slideIndex)
}

function atualSlides(n) {
    showSlides(slideIndex = n);
}

function rotacionarSlide(){
    showSlides(slideIndex += +1);
}
setInterval(rotacionarSlide, 7000);

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("img-carrossel");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++){
        slides[i].style.display="none";
    }
    for (i = 0; i < slides.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
}


//-------------validação de forms---------//

function validaBuscar() {
    var buscar = document.getElementById("inptbuscar");
    if( buscar.value == "")
    {
        alert("Preencha o campo Buscar!");
        return false;
    } else{
        return true;
    }
}

function validaNome() {
    var nome = document.getElementById("inpname");
    if( nome.value == "")
    {
        alert("Preencha o campo Nome!");
        return false;
    } else{
        return true;
    }
}
function validaEmail() {
    var email = document.getElementById("inpemail");
    if( email.value == "" || email.value.IndexOf("@")== -1 && email.value.IndexOf(".")== -1)
    {
        alert("Preencha o campo Email corretamente!");
        return false;
    } else{
        return true;
    }
}
function validaForm() {
    var email = document.getElementById("inpemail");
    var nome = document.getElementById("inpname");
    if (nome.value == "" || email.value == "") {
        alert("Preencha os campos obrigatórios ( * )!!")
        return false;
    } else {
        return true;
    }
}

