// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
    
    contract TCC {

           
        string  nCL; //nome cliente
        string  nEM; //nome empresa
        string  tPR; //tempo previsto
        string  rEQ; //requisições do software
        string  sTs; //status do contrato

        function setCETR(string memory NomeCliente, string memory NomeEmpresa, string memory TempoPrevisto, string memory Requisitos, string memory Status) public {
            nCL = NomeCliente;
            nEM = NomeEmpresa;
            tPR = TempoPrevisto;
            rEQ = Requisitos;
            sTs = Status;
        }  
    }
