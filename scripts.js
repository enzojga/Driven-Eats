let contador = 0;
let nomePrato;
let nomeBebida;
let nomeSobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let valorTotal;

function selecionarPrato(prato){
    let verificaEscolhido = document.querySelector('.principal .escolhido');
    let verSelo = prato.querySelector('.seloOk ');
    if(verificaEscolhido !== null){
        verificaEscolhido.classList.remove('escolhido');
        verSelo.classList.add('escondido');
    } else{
        contador++;
    }
    verSelo.classList.remove('escondido');
    nomePrato = prato.querySelector('h1');
    nomePrato = nomePrato.innerText;
    precoPrato = prato.querySelector('strong');
    precoPrato = Number(precoPrato.innerHTML);
    prato.classList.add('escolhido');

    let transfereNome = document.querySelector('.pedidos .nomePrato');
    transfereNome.innerText = nomePrato;
    console.log(transfereNome.innerText);

    let transferePreco = document.querySelector('.pedidos .precoPrato');
    transferePreco.innerText = precoPrato.toFixed(2);
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
    precoBebida = bebida.querySelector('strong');
    precoBebida = Number(precoBebida.innerHTML);
    bebida.classList.add('escolhido');

    let transfereNome = document.querySelector('.pedidos .nomeBebida');
    transfereNome.innerText = nomeBebida;
    console.log(transfereNome.innerText);

    let transferePreco = document.querySelector('.pedidos .precoBebida');
    transferePreco.innerText = precoBebida.toFixed(2);
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
    precoSobremesa = sobremesa.querySelector('strong');
    precoSobremesa = Number(precoSobremesa.innerHTML);
    sobremesa.classList.add('escolhido');

    let transfereNome = document.querySelector('.pedidos .nomeSobremesa');
    transfereNome.innerText = nomeSobremesa;
    console.log(transfereNome.innerText);

    let transferePreco = document.querySelector('.pedidos .precoSobremesa');
    transferePreco.innerText = precoSobremesa.toFixed(2);
    console.log(transferePreco.innerText);

    let transfereTotal = document.querySelector('.pedidos .total');
    valorTotal = precoBebida + precoPrato + precoSobremesa;
    transfereTotal.innerHTML = 'R$ ' + valorTotal.toFixed(2);
    sobremesa.classList.add('escolhido');
    finalziarPedido();
}
function traducao(){
    const menssagem = encodeURIComponent(`Olá,   gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$ ${valorTotal.toFixed(2)}`)
    let envio = document.querySelector('.pedir');
    envio.innerHTML = `<a href="https://api.whatsapp.com/send/?phone=%2B5521990521525&amp;text=${menssagem}">\n                        Tudo certo, pode pedir!</a>`
    console.log(menssagem);

}
function finalziarPedido(){
    if(contador >= 3){
        botao = document.querySelector('.finalizar button');
        botao.innerHTML = 'Fechar pedido';
        botao.classList.remove('botaoCinza');
        botao.classList.add('botaoVerde');
        traducao();
        return true;
    }
}

function mostrarPedido(){
    if(contador >= 3){
        const pog = document.querySelector('.pedidos');
        pog.classList.remove('escondido');

    }
}
function cancelar(){
    const pog = document.querySelector('.pedidos');
    pog.classList.add('escondido');
}


