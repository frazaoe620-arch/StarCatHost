
function handleAuth() {
    const user = document.getElementById('user').value;
    if(user !== "") {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        addLog("Bem-vindo à StarCatHost, " + user);
    }
}

function startServer() {
    addLog("Iniciando processo Java...");
    setTimeout(() => {
        document.getElementById('status-tag').style.color = "#55FF55";
        document.getElementById('status-tag').innerText = "● ONLINE";
        addLog("Servidor pronto para jogadores!");
    }, 1500);
}

function addLog(msg) {
    const console = document.getElementById('console');
    console.innerHTML += `<p>> ${msg}</p>`;
    console.scrollTop = console.scrollHeight;
}
