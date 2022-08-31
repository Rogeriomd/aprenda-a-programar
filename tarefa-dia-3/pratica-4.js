entrada = 17;
divisor = 2;
//console.log(`Números primo de 1 a ${x}:`);

while(entrada % divisor != 0 ){
    divisor++;

    if(entrada ==divisor){
        console.log(`Sim, o numero ${entrada} é primo!`);
    }
    else{
        console.log("Nmero não é primo!");
    }
}