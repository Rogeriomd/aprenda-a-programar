let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

//teste produto A

if (produtoA["internacional"] == true){

    produtoA["valor"] = produtoA["valor"] * 1.2;
    console.log("Produto internacional com 20%, novo valor: "+produtoA["nome"] +": " +produtoA["valor"]);

} else{

    produtoA["valor"] = produtoA["valor"] * 1.12;
    console.log("Produto nacional com 12 %, novo valor: "+produtoA["nome"] +": "+produtoA["valor"]);
}

//teste produto B
if (produtoB["internacional"] == true){

    produtoB["valor"] = produtoB["valor"] * 1.2;
    console.log("Produto internacional com 20%, novo valor: "+produtoB["nome"] +": " +produtoB["valor"]);

} else{

    produtoB["valor"] = produtoB["valor"] * 1.12;
    console.log("Produto nacional com 12 %, novo valor: "+produtoB["nome"] +": "+produtoB["valor"]);
}

//teste produto C
if (produtoC["internacional"] == true){

    produtoC["valor"] = produtoC["valor"] * 1.2;
    console.log("Produto internacional com 20%, novo valor: "+produtoC["nome"] +": " +produtoC["valor"]);

} else{

    produtoC["valor"] = produtoC["valor"] * 1.12;
    console.log("Produto nacional com 12 %, novo valor: "+produtoC["nome"] +": "+produtoC["valor"]);
}