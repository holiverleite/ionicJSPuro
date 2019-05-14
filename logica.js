const inputDepartamento = document.querySelector("#input-departamento");
const inputFuncionario = document.querySelector("#input-funcionario");
const inputValor = document.querySelector("#input-valor");
const limparDepartamento = document.querySelector("#btn-limpar-departamento");
const limparPessoa = document.querySelector("#btn-limpar-pessoa");
const cadastrarDepartamento = document.querySelector("#btn-cadastrar-departamento");
const cadastrarPessoa = document.querySelector("#btn-adicionar-pessoa");
const selectorDepartamento = document.querySelector("#selector-departamento");
const listaFuncionarios = document.querySelector("#lista-funcionarios");

//Estou selecionando o elemento pelo nome, e nÃ£o pelo ID
const alertCtrl = document.querySelector('ion-alert-controller');

function limparFormDepartamento(){
    inputDepartamento.value = "";
    inputFuncionario.value = "";
    inputValor.value = "";
}

function limparFormPessoa(){
    inputFuncionario.value = "";
    inputValor.value = "";
}

cadastrarDepartamento.addEventListener('click', () => {
    const dep = inputDepartamento.value;

    if(dep == ""){
        console.log("Informe valores válidos");
        //Diferente de todo o resto, 'create' nÃ£o Ã© vanilla js 
        alertCtrl.create({
            message: 'Entre com o nome de um departamento para realizar o cadastro',
            header: 'Invalid Inputs',
            buttons: ['Ok']
        }).then(alertElement => {
            alertElement.present();
        });
        return
    }

    //console.log(gastoInformado + ': ',valorInformado);
    const novoDepartamento = document.createElement('ion-select-option');
    novoDepartamento.textContent = dep;
    selectorDepartamento.appendChild(novoDepartamento);
    
    limparFormDepartamento();
})


cadastrarPessoa.addEventListener('click', () => {
    const nomeFunc = inputFuncionario.value;
    const salFunc = inputValor.value;
    const depart = selectorDepartamento.value;

    if(nomeFunc == "" || salFunc == "" || depart == ""){
        console.log("Informe valores válidos");
        //Diferente de todo o resto, 'create' nÃ£o Ã© vanilla js 
        alertCtrl.create({
            message: 'Entre com o nome de um funcionario e um salário para realizar o cadastro',
            header: 'Invalid Inputs',
            buttons: ['Ok']
        }).then(alertElement => {
            alertElement.present();
        });
        return
    }

    const novoFuncionario = document.createElement('ion-item');
    novoFuncionario.textContent = "Funcionario: " + nomeFunc + "\n" + "Salario: " + salFunc + "\n" + "Departamento: " + depart;
    listaFuncionarios.appendChild(novoFuncionario);
    
    limparFormPessoa();
})

limparPessoa.addEventListener('click',limparFormPessoa)

limparDepartamento.addEventListener('click',limparFormDepartamento)