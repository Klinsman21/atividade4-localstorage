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
