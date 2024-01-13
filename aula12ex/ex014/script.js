function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha250.png'
        document.body.style.background = '#4396D6'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde250.png'
        document.body.style.background = '#CD9F38'
    } else{
        img.src = 'imagens/noite250.png'
        document.body.style.background = '#04131C'
    }
}