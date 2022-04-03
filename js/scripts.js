// import apiKeyParticipants from "./creds";
var clientes = ['teste','Marcelo','Gustavo','Pedro']
var cpfs = ['0000','1111','2222','3333']

function verifyClient() {
    cliente = document.getElementById("name").value
    cpf = document.getElementById("cpf").value

    if ((clientes.includes(cliente)) || (cpfs.includes(cpf))) {
        window.location.href = "/form2.html"
    } else {
        window.location.href = "https://www.safra.com.br/abra-sua-conta.htm"
    }
}

