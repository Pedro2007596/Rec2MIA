const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/loja',
    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS : 20000
});


const leia = require("prompt-sync")()

//variaveis
let codP = ["P1","P2","P3"]
let descricao = ["Calça","Camisa","Chinelo"]
let valor = [100.00, 60.50, 200.25]
let estoque= [0,0,0]
let movimento = [0,0,0]
let codC = ["C1","C2","C3"]
let numero = ["99149-2486","01234-5678","98745-5621"]
let clientes = ["Claudio","Camila","Cleber"]
let email= ["claudio@gmail.com","camila@gmail.com","cleber@gmail.com"]
let idade = [21,22,23]
let opcaoMenuPrincipal=""
let opcaoSubMenu=""
let auxCod=""
let posicao = -1
//programa principal
while(opcaoMenuPrincipal != "2"){
    console.log("LOJA Style\n\n")
    console.log("MENU PRINCIPAL")    
    console.log("1 - Opções")
    console.log("2 - Sair")
    opcaoMenuPrincipal = leia("Digite o numero da sua opção : ")
    if (opcaoMenuPrincipal =="1"){
        opcaoSubMenu=""
        //SUB-MENU REFERENTE AS OPÇÕES
        while(opcaoSubMenu != "4"){
            console.log("SUB-MENU")
            console.log("1 - MOSTRAR OS REGISTROS")
            console.log("2 - ALTERAR PRODUTOS")
            console.log("3 - ALTERAR CLIENTES")
            console.log("4 - SAIR")
            opcaoSubMenu = leia("Digite o numero da sua opção : ")
            if(opcaoSubMenu=="1"){
                console.log("COD\tDESCRICAO\tVALOR\tESTOQUE")
                for(let x = 0; x<codP.length ; x++){
                    console.log(codP[x]+"\t"+descricao[x]+"\t\t"+valor[x]+"\t"+estoque[x])
                }
                console.log("COD\tNOME\t\tIDADE\tnumero\t\temail")
                for(let x = 0; x<codP.length ; x++){
                    console.log(codC[x]+"\t"+clientes[x]+"\t\t"+idade[x]+"\t"+numero[x]+"\t"+email[x])
                }
            }
            else if(opcaoSubMenu=="2"){
                auxCod = leia("Digite o codigo do produto que deseja alterar : ").toUpperCase()
                for(let x =0; x<codP.length; x++){
                    if(auxCod==codP[x]){
                        posicao = x
                    }                    
                }
                if(posicao == -1){
                    console.log("Produto não encontrado...")
                }
             
                else {
                    valor[posicao]=parseFloat(leia("Digite o novo preço: "));
                    estoque[posicao]=parseInt(leia("Digite o novo preço : "))
                }
                
                
            }
            
            else if(opcaoSubMenu=="3"){
                auxCod = leia("Digite o codigo do cliente que deseja alterar : ").toUpperCase()
                for(let x =0; x<codP.length; x++){
                        console.log(codC[x]+"\t"+clientes[x]+"\t\t"+idade[x]+"\t"+email[x])
                    if(auxCod==codC[x]){
                        posicao = x
                    }                    
                }
                if(posicao == -1){
                    console.log("Cliente não encontrado...")
                }
             
                else {
                    clientes[posicao]=parseFloat(leia("Digite o nova nome: "));
                    idade[posicao]=parseInt(leia("Digite a naova idade : "))
            }
        }
        
        
    }
}

}