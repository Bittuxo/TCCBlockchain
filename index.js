const Web3 = require('web3');
const TCC = require('./build/contracts/TCC.json');
var mysql = require('mysql');
var readline = require('readline');


var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "1233",
    database: "APS"
})


const NomeCliente = "Weilington";
const NomeEmpresa = "3min company";
const TempoPrevisto = "3 Minutos";
const Requisitos = "Conexão Direta";
var resp = "";
var resposta = "";

const web3 = new Web3 ('http://localhost:8545');
const deployedNetwork = TCC.networks[5777].address;
console.log(resp);

const Adicionacontrato = async () => {

    const netId = await web3.eth.net.getId();
    const addresses = await web3.eth.getAccounts();
                const contract = new web3.eth.Contract(
                    TCC.abi,
                    deployedNetwork
                );
                const receipt = await contract.methods.setCETR(NomeCliente, NomeEmpresa, TempoPrevisto, Requisitos, Status).send({
                    from: addresses[0]
                    });
    contract.methods.setCETR(NomeCliente, NomeEmpresa, TempoPrevisto, Requisitos, Status).send({from: addresses[0] })
        .on('transactionHash', function(hash){
            console.log(hash);
                const sql = "INSERT into contratos_alt(Cliente, Empresa, DataPrevista, Requisitos, Hash, HashOld, status)values('"+ NomeCliente + "','" + NomeEmpresa + "','" + TempoPrevisto + "','" + Requisitos + "','" + hash + "','" + HashOld + "','" + status + "');";
                con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Foi Adicionado um contrato");
                });
            con.end();
        })
    }


    const alteracaocontrato = async () => {
        const netId = await web3.eth.net.getId();
        const addresses = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        TCC.abi,
        deployedNetwork
    );
    contract.methods.setCETR(NomeCliente, NomeEmpresa, TempoPrevisto, Requisitos, Status).send({from: addresses[0] })
    .on('transactionHash', function(hash){
        console.log(hash);
        
            const NomeCliente = "Vladimir";
            const NomeEmpresa = "Dracula corporation";
            const TempoPrevisto = "3 Anos";
            const Requisitos = "Apagar a Luz";
            const HashOld = "0xc494a4a14bd4ddf306b3873c25fdcd16eb5c875209930f1b22e4d8b40d81a04a";
            const status = "Estável";
            const sql = "INSERT into contratos_alt(Cliente, Empresa, DataPrevista, Requisitos, Hash, HashOld, status)values('"+ NomeCliente + "','" + NomeEmpresa + "','" + TempoPrevisto + "','" + Requisitos + "','" + hash + "','" + HashOld + "','" + status + "');";
            con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Um contrato foi alterado");
            });
        ;
        con.end();
    })
    }


    const quebracontrato = async () => {
        const netId = await web3.eth.net.getId();
        const addresses = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        TCC.abi,
        deployedNetwork
    );
    contract.methods.setCETR(NomeCliente, NomeEmpresa, TempoPrevisto, Requisitos, Status).send({from: addresses[0] })
    .on('transactionHash', function(hash){
        console.log(hash);
        
            const NomeCliente = "Vladimir";
            const NomeEmpresa = "Dracula corporation";
            const TempoPrevisto = "3 Anos";
            const Requisitos = "Apagar a Luz";
            const HashOld = "0xc494a4a14bd4ddf306b3873c25fdcd16eb5c875209930f1b22e4d8b40d81a04a";
            const status = "Quebrado";

                    const sql = "INSERT into contratos_alt(Cliente, Empresa, DataPrevista, Requisitos, Hash, HashOld, status)values('"+ NomeCliente + "','" + NomeEmpresa + "','" + TempoPrevisto + "','" + Requisitos + "','" + hash + "','" + HashOld + "','" + status + "');";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("Um contrato foi alterado");
                    });
        
        con.end();
    })
    }


con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
});


var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


leitor.question("O que Deseja fazer?\n1 - Adicionar um contrato? \n2 - Modificar um contrato?\n3 - Consultar um contrato?\n", function(answer){
        var resp = answer;
        
    
        // Adiciona contrato no Siste 
        if (resp == 1){
            console.log("As informações do contrato já foram preenchidas");
                    Adicionacontrato();
                    leitor.close();
        } 
        //Altera contrato no siste
        else if (resp == 2 ){

           var mudanca = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            mudanca.question("Quebrar contrato?\n1 - Sim \n2 - Não\n", function(respondido){
                var respota = respondido;
            
                if (respota == 1 ){
                    quebracontrato();
                } 
                else {
                    console.log("O contrato que sofre alteração já vem escolhido para essa simulação");
                    alteracaocontrato();
                    leitor.close();
                }
            });
        } 
        //Consulta contrato no sistema
        else {
            var I = [];
            con.query("select * from contratos where Hash like '0x%'", function (err, rows){
                if(err) {
                    throw err;
                } else {
                    setValue(rows);
                    }
            });
            function setValue(value) {
                    I = value;
                    console.log(I);
                }
                if(I != null){
                    //console.log("Já existe o hash no sistema");
                } else {
                   //console.log("Não foi possivel achar o hash");
                }
                var E = [];
            con.query("select * from contratos_alt where Hash like '0x%'", function (err, rows){
                console.log("------CONTRATOS QUE SOFRERAM ALTERAÇÃO-------");
                if(err) {
                    throw err;
                } else {
                    setValue(rows);
                    }
            });
            function setValue(value) {
                    E = value;
                    console.log(E);
                }
                if(I != null){
                    console.log("Já existe o hash no sistema");
                    console.log("-------------");
                    console.log("Contratos Originais");
                } else {
                    console.log("Não foi possivel achar o hash");
                }
                leitor.close();
                con.end();
        }
});
