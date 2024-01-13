agora = new Date()
var diaSem = agora.getDay()

// Cada dia da semana é um numero iniciando do 0
/*
Domingo = 0
Segunda-feira = 1
Terça-feira = 2
Quarta-Feira = 3
Quinta-feira = 4
Sexta-feira = 5
Sabado = 6
*/

switch (diaSem) {
    case 0:
        console.log('Hoje é Domingo.')
        break;
    case 1:
        console.log('Hoje é Segunda-feira.')
        break;
    case 2:
        console.log('Hoje é Terça-feira.')
        break;
    case 3:
        console.log('Hoje é Quarta-feira.')    
        break;
    case 4:
        console.log('Hoje é Quinta-feira.')    
        break;
    case 5:
        console.log('Hoje é Sexta-feira.')
        break;
    case 6:
        console.log('Hoje é Sabado.')
        break;
    default:
        console.log('[ERRO] Dia invalido!')
}