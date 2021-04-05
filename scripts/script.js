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

const Mask = {
    isPhone(input){
        let value = input.value;
        value = value.replace(/\D/,"");

        if (value.length > 11) {
            value = value.slice(0,-1);
        }

        value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        input.value = value
    }
}

const Validate = {
    isEmail(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const formatEmail = /^\w+([\.\-_]?\w+)*@\w+([\.\-_]?\w+)(\.\w{2,3})+$/;
        if (value.search(formatEmail) == -1){
            error = "Email invalido";
            Validate.displayError(input,error);
            return;
        }
        input.value = value;
    },
    isPhone(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const formatPhone = /^(\(\d{2}\)) (\d{5})-(\d{4})$/       //(12) 34567-8911
        if (value.search(formatPhone) == -1){
            error = "Numero invalido";
            Validate.displayError(input,error);
            return;
        }
        input.value = value;
    },
    isCode(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const formatCode = /^(\d{2,})$/
        if (value.search(formatCode) == -1){
            error = "Codigo invalido";
            Validate.displayError(input,error);
            return;
        }
        input.value = value;
    },
    isName(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const formatName = /^[a-z ]+$/i;
        if (value.search(formatName) == -1){
            error = "Codigo invalido";
            Validate.displayError(input,error);
            return;
        }
        input.value = value;
    },
    clearErrors(input){
        const errorDiv = input.parentNode.querySelector('.error');
        if (errorDiv){
            errorDiv.remove();
        }
    },
    displayError(input,error){
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = error;
        input.parentNode.appendChild(div);
        input.focus();
    }
}