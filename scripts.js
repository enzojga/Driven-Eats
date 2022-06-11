let contador = 0;
var nomePrato;
let nomeBebida;
let nomeSobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;


function selecionarPrato(prato){
    let verificaEscolhido = document.querySelector('.principal .escolhido');
    let verSelo = prato.querySelector('.seloOk');
    if(verificaEscolhido !== null){
        verificaEscolhido.classList.remove('escolhido');
    } else{
        contador++;
    }
    verSelo.classList.toggle('escondido');
    nomePrato = prato.querySelector('h1');
    nomePrato = nomePrato.innerText;
    precoPrato = prato.querySelector('h3');
    precoPrato = precoPrato.innerHTML;
    prato.classList.add('escolhido');

    let transfereNome = document.querySelector('.pedidos .nomePrato');
    transfereNome.innerText = nomePrato;
    console.log(transfereNome.innerText);

    let transferePreco = document.querySelector('.pedidos .precoPrato');
    transferePreco.innerText = precoPrato;
    console.log(transferePreco.innerText);

    finalziarPedido();
}
console.log(nomePrato);

function selecionarBebida(bebida){
    let verificaEscolhido = document.querySelector('.bebidas .escolhido');
    if(verificaEscolhido !== null){
        verificaEscolhido.classList.remove('escolhido');
    } else{
        contador++;
    }

    nomeBebida = bebida.querySelector('h1');
    nomeBebida = nomeBebida.innerText;
    precoBebida = bebida.querySelector('h3');
    precoBebida = precoBebida.innerHTML;
    bebida.classList.add('escolhido');

    let transfereNome = document.querySelector('.pedidos .nomeBebida');
    transfereNome.innerText = nomeBebida;
    console.log(transfereNome.innerText);

    let transferePreco = document.querySelector('.pedidos .precoBebida');
    transferePreco.innerText = precoBebida;
    console.log(transferePreco.innerText);

}
function selecionarSobremesa(sobremesa){
    let verificaEscolhido = document.querySelector('.sobremesa .escolhido');
    if(verificaEscolhido !== null){
        verificaEscolhido.classList.remove('escolhido');
    } else{
        contador++;
    }

    nomeSobremesa = sobremesa.querySelector('h1');
    nomeSobremesa = nomeSobremesa.innerText;
    precoSobremesa = sobremesa.querySelector('h3');
    precoSobremesa = parseInt(precoSobremesa.innerHTML);
    sobremesa.classList.add('escolhido');

    let transfereNome = document.querySelector('.pedidos .nomeSobremesa');
    transfereNome.innerText = nomeSobremesa;
    console.log(transfereNome.innerText);

    let transferePreco = document.querySelector('.pedidos .precoSobremesa');
    transferePreco.innerText = precoSobremesa;
    console.log(transferePreco.innerText);


    sobremesa.classList.add('escolhido');
    finalziarPedido();
}

function finalziarPedido(){
    if(contador >= 3){
        botao = document.querySelector('.finalizar button');
        botao.innerHTML = 'Fechar pedido';
        botao.classList.remove('botaoCinza');
        botao.classList.add('botaoVerde');
        return true;
    }else{
        return false;
    }
}

function mostrarPedido(){
    if(contador >= 3){
        const pog = document.querySelector('.pedidos');
        pog.classList.remove('escondido');

    }
}