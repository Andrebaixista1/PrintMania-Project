function quantidade55(){
    var getValue = document.getElementById('adesivosQtde');
    var select = getValue
    var value = select.options[select.selectedIndex].value;

    return value;

}





function addCarrinho(){
    let valor = 9.99;
    let total = document.getElementById("total5x5");

    let qtde = quantidade55();
    // console.log(qtde);
    let totalValor = valor * qtde;
    total.innerHTML = "R$" + parseFloat(totalValor).toFixed(2);
    // console.log(valor);

    

    // return totalValor
}

function removeCarrinho(){
    let valor = 0.00;
    let total = document.getElementById("total5x5");
    total.innerHTML = "R$" + parseFloat(valor).toFixed(2);
    // console.log(valor);
    
    
    
    return total
}

// //Total no carrinho
// function atualizaCarrinho(){
//     let addCarrinho = addCarrinho();
//     let removeCarrinho = removeCarrinho();
//     let total = document.getElementById("valorTotal");
    

//     total.innerHTML = parseFloat(addCarrinho) 
//     console.log(total);
//     return total;
// }


