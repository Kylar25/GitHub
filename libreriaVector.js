function vector (n,m){
    resultado = []
    for( let i = 0; i < n; i++){
        let r = Math.random() * (20 - 0) + 0;
        resultado.push(r)
    }
      return resultado
}
console.log(vector(6,8));


function sumavector (v1,v2){
    let r = []
    if ( v1.lenght == v2.lenght){
        for(let i = 0; i < v1.length; i++){
            r[i] = v1[i]+v2[i]
        }  
    }
    return r
}
console.log(sumavector ([2,3],[3,4]));


function productovector(n,v){
    let producto = []
    for( let i = 0; i < v.length; i++){ 
       producto.push(v[i]*n)
    }
      return producto
}
console.log(productovector(5,[3,4]));


function restavector (v1,v2){
    let res = []
    if ( v1.lenght == v2.lenght){
        for(let i = 0; i < v2.length; i++)
        res.push(v1[i]-v2[i])
    }
    return res
}
console.log(restavector([2,3],[3,4]));


function productovector2 (v1,v2){
    let res1 = []
    if ( v1.lenght == v2.lenght){
        for(let i = 0; i < v2.length; i++)
        res1.push(v1[i]*v2[i])
    }
    return res1
}
console.log(productovector2([2,3],[3,4]));

module.exports = {vector, sumavector, productovector, restavector, productovector2}


function cuadradonumero (n){
    let res2 = []
    res2 = n*n
    return res2
}
console.log(cuadradonumero(33));