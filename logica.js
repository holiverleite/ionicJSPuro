const gasto = document.querySelector("#input-gasto");
const valor = document.querySelector("#input-valor");
const limpar = document.querySelector("#btn-limpar");
const enviar = document.querySelector("#btn-enviar");
const lista = document.querySelector("#lista-gastos");
const gastosTotaisInput = document.querySelector("#gastosTotais");
//Estou selecionando o elemento pelo nome, e nÃ£o pelo ID
const alertCtrl = document.querySelector('ion-alert-controller');

let gastosTotais = 0;

function limparForm(){
    valor.value = "";
    gasto.value = "";
}

enviar.addEventListener('click', () => {
    //Valores dos inputs
    const valorInformado = valor.value;
    const gastoInformado = gasto.value;
    //Validar os inputs
    if(gastoInformado.trim().lenght <= 0 ||  valorInformado <=0 ){
        console.log("Informe valores vÃ¡lidos");
        //Diferente de todo o resto, 'create' nÃ£o Ã© vanilla js 
        alertCtrl.create({
            message: 'Entre um gasto e um valor',
            header: 'Invalid Inputs',
            buttons: ['Ok']
        }).then(alertElement => {
            alertElement.present();
        });
        return
    }
    //console.log(gastoInformado + ': ',valorInformado);
    const novoGasto = document.createElement('ion-item');
    novoGasto.textContent = gastoInformado + ': R$' + valorInformado;
    lista.appendChild(novoGasto);
    //Atualiza valor total
    gastosTotais = gastosTotais + +valor.value;
    gastosTotaisInput.textContent = gastosTotais;
    limparForm();
})

limpar.addEventListener('click',limparForm)