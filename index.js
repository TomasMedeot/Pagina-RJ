let lang = null
let button1 = "0"
let button2 = "0"
let button3 = "0"
let button4 = "0"
function load_lang(){
    fetch(`languajes/español.json`)
    .then(response => response.json())
    .then(data => {lang = data;});
    console.log(lang)
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(hideSidebar(), 1000);
    });
});
const mensaje = document.getElementById('mensaje');
const contadorCaracteres = document.getElementById('contador');
mensaje.addEventListener('input', function() {
    const caracteresRestantes = 200 - mensaje.value.length;
    contadorCaracteres.textContent = caracteresRestantes;
});
function traducirElemento(id, texto) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.placeholder = texto;
    }
}
document.querySelectorAll('.language ul li a').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const language = this.classList[0];
        fetch(`languajes/${language}.json`)
            .then(response => response.json())
            .then(data => {
                lang = data;
            document.getElementById('title').innerText = data.title;
            document.getElementById('nav-a').innerText = data.nav_a;
            document.getElementById('nav-b').innerText = data.nav_b;
            document.getElementById('nav-c').innerText = data.nav_c;
            document.getElementById('nav-d').innerText = data.nav_d;
            document.getElementById('nav-a2').innerText = data.nav_a;
            document.getElementById('nav-b2').innerText = data.nav_b;
            document.getElementById('nav-c2').innerText = data.nav_c;
            document.getElementById('nav-d2').innerText = data.nav_d;
            document.getElementById('contact_l').innerText = data.contact_l;
            document.getElementById('name').innerText = data.name;
            document.getElementById('email_t').innerText = data.email;
            document.getElementById('message').innerText = data.message;
            document.getElementById('enviar').innerText = data.enviar;
            document.getElementById('webs').innerText = data.webs;
            traducirElemento('name_2', data.placeholders.name_2);
            traducirElemento('email', data.placeholders.email_2);
            traducirElemento('mensaje', data.placeholders.mensaje);
            document.getElementById('about-t').innerText = data.about;
            document.getElementById('text1').innerText = data.text1;
            document.getElementById('text2').innerText = data.text2;
            document.getElementById('text3').innerText = data.text3;
            document.getElementById('text4').innerText = data.text4;
            document.getElementById('text5').innerText = data.text5;
            document.getElementById('text6').innerText = data.text6;
            document.getElementById('text7').innerText = data.text7;
            document.getElementById('text8').innerText = data.text8;
            document.getElementById('text9').innerText = data.text9;
            document.getElementById('text10').innerText = data.text10;
            document.getElementById('text11').innerText = data.text11;
            document.getElementById('text12').innerText = data.text12;
            document.getElementById('text13').innerText = data.text13;
            document.getElementById('text14').innerText = data.text14;
            document.getElementById('text15').innerText = data.text15;
            document.getElementById('text16').innerText = data.text16;
            document.getElementById('text17').innerText = data.text17;
            document.getElementById('text18').innerText = data.text18;
            document.getElementById('text19').innerText = data.text19;
            document.getElementById('text20').innerText = data.text20;
            document.getElementById('text21').innerText = data.text20;
            document.getElementById('text22').innerText = data.text23;
            document.getElementById('text23').innerText = data.text24;
            document.getElementById('consultar').innerText = data.consultar;
            document.getElementById('consultar2').innerText = data.consultar;
            update_button(document.getElementById("boton-toggle"),data,button1);
            update_button(document.getElementById("boton-toggle2"),data,button2);
            update_button(document.getElementById("boton-toggle3"),data,button3);
            update_button(document.getElementById("boton-toggle4"),data,button4);
            document.getElementById("language-selected").innerText=data.lang;
            document.getElementById("language-selected2").innerText=data.lang;
            if(language == 'español'){
                setLanguageSelectedBackground('es');
            }else{
                if(language == 'english'){
                    setLanguageSelectedBackground('en');
                }else{
                    setLanguageSelectedBackground('fr');
                }
            }
            })
    });
});
function setLanguageSelectedBackground(imageName) {
        var languageSelectedElement = document.getElementById("language-selected");
        var languageSelectedElement2 = document.getElementById("language-selected2");
        languageSelectedElement.className='language-selected-'+imageName
        languageSelectedElement2.className='language-selected-'+imageName
    };
let lastScrollTop = 0;
console.log("Scroll event added");
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        document.getElementById('navbar').classList.add('hidden');
        $('#language-selector ul').hide();
    } else {
        document.getElementById('navbar').classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
document.getElementById('consultar').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
document.getElementById('consultar2').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});  
document.getElementById("toggleBtn").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    var ovelay = document.getElementById("overlay");
    if (sidebar.style.right === "-270px") {
        sidebar.style.right = "0";  
        ovelay.style.display = "block";
    } else {
        sidebar.style.right = "-270px";
        ovelay.style.display = "none";
    }
});
function hideSidebar() {
    var sidebar = document.getElementById("sidebar");
    var ovelay = document.getElementById("overlay");
    sidebar.style.right = "-270px";
    ovelay.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    var botonToggle = document.getElementById("boton-toggle");
    var textoLargo = document.getElementById("text15");

    botonToggle.addEventListener("click", function() {
        if (textoLargo.style.maxHeight) {
            textoLargo.style.maxHeight = null;
            button1="0";
            update_button(botonToggle,lang,button1);
        } else {
            textoLargo.style.maxHeight = textoLargo.scrollHeight + "px";
            button1="1";
            update_button(botonToggle,lang,button1);
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var botonToggle = document.getElementById("boton-toggle2");
    var textoLargo = document.getElementById("text17");

    botonToggle.addEventListener("click", function() {
        if (textoLargo.style.maxHeight) {
            textoLargo.style.maxHeight = null; 
            button2="0";
            update_button(botonToggle,lang,button2);
        } else {
            textoLargo.style.maxHeight = textoLargo.scrollHeight + "px";
            button2="1";
            update_button(botonToggle,lang,button2);
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var botonToggle = document.getElementById("boton-toggle3");
    var textoLargo = document.getElementById("text19");

    botonToggle.addEventListener("click", function() {
        if (textoLargo.style.maxHeight) {
            textoLargo.style.maxHeight = null; 
            button3="0";
            update_button(botonToggle,lang,button3);
        } else {
            textoLargo.style.maxHeight = textoLargo.scrollHeight + "px";
            button3="1";
            update_button(botonToggle,lang,button3);
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var botonToggle = document.getElementById("boton-toggle4");
    var textoLargo = document.getElementById("text13");

    botonToggle.addEventListener("click", function() {
        if (textoLargo.style.maxHeight) {
            textoLargo.style.maxHeight = null; 
            button4="0";
            update_button(botonToggle,lang,button4);
        } else {
            textoLargo.style.maxHeight = textoLargo.scrollHeight + "px";
            button4="1";
            update_button(botonToggle,lang,button4);
        }
    });
});
function update_button(element, data, t){
    if (data === null){
        fetch(`languajes/español.json`)
        .then(response => response.json())
        .then(data => {
            lang = data;
            if (t === "0"){
                element.textContent = lang.text21;
            }
            else{
                element.textContent = lang.text22;
                }
        });
    }else{
        if (t === "0"){
            element.textContent = data.text21;
        }
        else{
            element.textContent = data.text22;
            }
    }
}
var element = document.getElementById('follow-scroll');
var initialOffset = element.offsetTop;
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || window.pageYOffset;
    if (scrollTop >= initialOffset) {
        element.classList.add('fixed');
        element.style.position = 'fixed';
        element.style.marginTop = '85px';
    } else {
        element.style.marginTop = '0';
        element.style.position = 'relative';
    }
});
window.addEventListener('resize', function() {
    initialOffset = element.offsetTop;
});