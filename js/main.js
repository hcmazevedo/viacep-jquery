/**
 * Consumindo API Rest com Jquery (Huan Azevedo)
 * VIA CEP: http://viacep.com.br/ws/89226001/json
 * 
 * Recebe o retorno em Jason e preenche os campos do formulário automáticamente
 * através do evento "onblur" que chama a função "consultaCep()"
 */

function consultaCep(){

    // Declaração da variável que recebe o valor do campo cep (index.html)
    var cep = document.getElementById('inputZip').value;

    $.ajax({
        url: "http://viacep.com.br/ws/"+cep+"/json",
        type: "GET",
        success: function(response){
            
            /**
             * Caso eu precise apenas do Bairro, ficaria conforme abaixo:
             * console.log(response.bairro);
             * 
             * Para exibir o resultado na div, faça conforme abaixo:
             */

            /**
             * Para fazer via Javascript
             * 
             document.getElementById('inputZip').value = response.cep;
             document.getElementById('inputAddress').value = response.logradouro;
             document.getElementById('inputBairro').value = response.bairro;
             document.getElementById('inputCity').value = response.localidade;
             document.getElementById('inputState').value = response.uf;
            */

            /**
             * Outra forma de fazer via jquery
             * # para ID
             * . para CLASSE
             */
             $('#inputZip').val(response.cep);
             $('#inputAddress').val(response.logradouro);
             $('#inputBairro').val(response.bairro);
             $('#inputCity').val(response.localidade);
             $('#inputState').val(response.uf);
        }
    })
}