
//Data do evento
let dataDoEvento = new Date('2026,3,23');
let dataAtual = new Date('2022,3,22');


if (dataAtual < dataDoEvento){
    console.log('Evento permitido, a data do evento é posterior a data atual.');
}else{
    console.log("O cadastro não sera permitido por data inválida.")
}


//Maioridade do participante minimo 18 naos
let participante = 19;

if(participante >= 18){
    console.log("Cadastro permitido, participante maior de 18 anos.")
}else{
    console.log("Ocadastro não poderá ser permitido, participante menor de 18 anos.")
}


//Listar participante
let opcao1 = "participante";
let opcao2 = "palestrante";

if (opcao1 != opcao2){
    console.log('Você foi adicionado a lista de participantes, seja bem vindo.');
}else{
    console.log("Você foi adicionado a lista de palestrante, seja bem vindo.")
}

//Quantidade de participantes limite de 100
if (participante.length <= 100){
    console.log('O seu cadastro foi permitido.');
}else{
    console.log('O cadastro não será permitido por ter excedido o limite.');
}



