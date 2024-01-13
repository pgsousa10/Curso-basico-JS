function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var FAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (FAno.value.length == 0 || Number(FAno.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(FAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 16){
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/adolescente-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else{
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 16){
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/adolescente-f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulta-f.png')
            } else{
                img.setAttribute('src', 'imagens/idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}