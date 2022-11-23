//Declare uma variável array para armazenar a lista dos nomes
var arrayNomes = [];

//Defina a função adicionarConvidado()
function adicionarConvidado()
{

    //Declare uma variável para armazenar o nome digitado na input
    var convidado = document.getElementById("convidado").value;

    //Mostre a var convidado no console para verificar se está funcionando
    console.log(convidado);

    //Adicione o nome enviado na array a partir da var convidado
    arrayNomes.push(convidado);

    //Mostre a var arrayNomes no console para verificar se está funcionando
    console.log(arrayNomes);

    //Limpe a input assim que o botão for clicado
    document.getElementById("convidado").value="";

    //Exiba a array no corpo do site
    document.getElementById("atualizandoLista").innerHTML = arrayNomes;

}
