let num = [5, 8, 2, 9, 3]

num.sort()
num.push(1) //A ordem importa sera adicionado após ja ter organizado com o sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)
console.log(`O valor 4 esta na posição ${pos}`)

/*
ou
if (pos == -1){
    console.log('O valor não foi encontrado!))
} else{
    console.log(`O valor esta na posição ${pos}`)
}

*/