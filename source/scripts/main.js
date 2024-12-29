document.addEventListener('DOMContentLoaded', function(){

    let lista_personagens = []

    fetch('./jsons/one_piece_characters.json')
        .then(response => response.json())
            .then(data => {
                for(let i = 0; i < 1505; i++){
                    lista_personagens.push(data[i])
                }
                const tamanhoLista = lista_personagens.length
                console.log(tamanhoLista)

                document.getElementById('form-sorteio').addEventListener('submit', function(e){
                    e.preventDefault();
            
                    // conseguindo o personagem aleatorio
                    const indiceAleatorio = Math.floor(tamanhoLista*Math.random()) //tamanho da lista atinge uma posicao maior que o ultimo indice da lista
                    console.log(indiceAleatorio)
            
                    document.querySelector('#resultado').innerHTML = lista_personagens[indiceAleatorio]
                    document.querySelector('.mensagem-ganhador h3').style = 'display:block'
                })
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo JSON:', error);
            });

})