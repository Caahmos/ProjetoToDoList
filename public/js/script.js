(function mudarDeCor(){
    const listaDeStatus = document.querySelectorAll('.mudar-de-cor');

    for(let status of listaDeStatus){
        console.log(status.innerText);
        if(status.innerText == 'Em andamento'){
            status.classList.add('text-warning')
        }
        if(status.innerText == 'Concluída'){
            status.classList.add('text-success')
        }
        if(status.innerText == 'Não iniciada'){
            status.classList.add('text-secondary')
        }
    }
})()