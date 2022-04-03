document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {  
        const tituloVar = document.getElementById('titulo')
        const contentVar = document.getElementById('container-message')
        tituloVar.innerHTML = "Sucesso"
        contentVar.innerHTML = '<img src="/assets/loading/ok.png" alt="Icone de Loading">'
        console.log(contentVar)
    }, 2500);
  });