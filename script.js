// Loading

setTimeout(() => {

    document.getElementById("loading").style.display = "none";
    document.getElementById("app").style.display = "block";

}, 3000);

// Tema

const btn = document.getElementById("themeBtn");

btn.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        btn.innerHTML = "☀️";
    }else{
        btn.innerHTML = "🌙";
    }

};
