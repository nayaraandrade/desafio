// Importe do módulo fs
import * as fs from 'fs';      

// Importe do arquivo confg.js

import { FILE_PATH_BASE } from 'C:\Users\nayar\OneDrive\Área de Trabalho\desafio.01\public\config.js';


//Função ler o JSON
function  lerJson(jsonObjt){
     let objt  = JSON.parse(fs.readFileSync(FILE_PATH_BASE, {encoding:'utf8', flag:'r'}));    //com o metodo JSON.parse é possivel converter string em objetos
                                                                                              //com o metodo readFileSync 
    console.log(objt);
} 
                                                                                      

// Função para listar histórias
function listarHistorias (historias) {
   let listarHistorias = [];
   for (let i = 0; i < sistemas.length; i++) {       //for cria uma estrutura de repetição, determinando que uma ação deve ser executada a partir de uma condição inicial até que seja encontrada outra que interrompa o laço
       for (let x = 0; x < sistemas[i].historias.length; x++){
         listarHistorias.push(sistemas[i].historias[x])       //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array
      }
   }
   console.log(lista);                                                
   }
 
    
function adicionarHistorias(titulo, introducao, texto, responsavel, data_conclusao, resultados){

  let objt = JSON.parse(data);        
  let Data = valor;
  
  
  if(descricaoTitulo === 'navegação')    //o operador === significa "igualdade estrita", ou seja, somente retorna true se os operandos forem do mesmo tipo e valor
  {             
      insert[0]["sistemas"][0]["historias"].push(Data);
  }
  else if(descricaoTitulo === 'sensores')
  {
      insert[0]["sistemas"][1]["historias"].push(Data);
  }                                                                 
  else if(descricaoTitulo === 'frenagem')
  {
      insert[0]["sistemas"][2]["historias"].push(Data);
  }
  else if(descricaoTitulo === 'direção')
  {
      insert[0]["sistemas"][3]["historias"].push(Data);
  }
  else if(descricaoTitulo === 'sistema de comunicação')
  {
      insert[0]["sistemas"][4]["historias"].push(Data);
  }
  else if(descricaoTitulo === 'bateria')
  {
      insert[0]["sistemas"][5]["historias"].push(Data);
  }


  fs.writeFile("historias.json", (err) => {   //err: É um erro que será lançado se a operação falhar
    if (err)
      console.log(err);
    else {
      console.log("Historia gravada com sucesso!");
      
    }
  });
 

// funçao buscar historia por titulo
function buscarHistorias (titulo) {
    let data = fs.readFileSync(path)
    let sistemas = JSON.parse(data).sistemas
    for(let i = 0; i < sistemas.length; i++){
      for(let k = 0; k < sistemas[i].historias.length; k++){
        


      }}
}



//funçao removerhistorias
function removerHistorias () {
  
}




}
// Exporte as funções permitindo que outros módulos importem e usem essas funções.

//export {lerJson, listarHistorias, adicionarHistorias, buscarHistorias, removerHistorias};  // torna as funcoes utilizaveis por outras classes


