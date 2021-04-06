function listar(){
    let tbody = document.querySelector('#tblListar tbody');
    let linhas = '';
    let users = JSON.parse(localStorage.getItem('usuarios'));

    for (let i in users) {
        let user = users[i];
        linhas += `<tr>
                <td>
                    <img src='images/editar.png' alt ='${i}' onclick='handleEditar(this)'/>
                    <img src='images/delete.png' alt ='${i}' onclick='handleDeletar(this)'/>
                </td>
                <td>${user.codigo}</td>
                <td>${user.nome}</td>
                <td>${user.telefone}</td>
                <td>${user.email}</td>
              </tr>`
    }
    tbody.innerHTML = linhas;

}
document.querySelector('#btnListar').addEventListener('click', function(e){
    listar();
})

// SALVAR INFORMAÇOES
const salvar = enviar => {
    let formData = {
        txtCodigo: document.getElementById('txtCodigo').value,
        txtNome: document.getElementById('txtNome').value,
        txtTelefone: document.getElementById('txtTelefone').value,
        txtEmail: document.getElementById('txtEmail').value

    }
    localStorage.setItem('formData', JSON.stringify(formData));
    alert("Enviado com sucesso");
}
