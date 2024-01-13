// RECURSIVIDADE
function fatorial(n) {  
    if(n == 1){
        return 11
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

5! = 5x4x3x2x1 = 120
5! = 5x4! = 120

n! = n x (n-1)!
1! = 1

*/