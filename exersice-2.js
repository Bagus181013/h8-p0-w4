function fpb(angka1, angka2) {
    var tempAngka1=[]
    var tempAngka2=[]
    var tampung=[]
    for ( var i=0; i<angka1; i++){
        if (angka1%i==0){
            //console.log(i)
            tempAngka1.push(i)
        }
    }
    for ( var i=0; i<angka2; i++){
        if ( angka2%i==0){
            //console.log(i)
            tempAngka2.push(i)
        }
    }
    for ( var i=0; i<tempAngka1.length; i++){
        //console.log(tempAngka1[i])
        for ( var j=0; j<tempAngka2.length; j++){
            if ( tempAngka1[i]==tempAngka2[j]){
                tampung.push(tempAngka1[i])
                tampung.push(tempAngka2[j])
            }
        }
    }
    for ( var i=0; i<tampung.length; i++){
        var satu=tampung[0]
        if ( satu < tampung[i]){
            satu=tampung[i]
            //console.log(satu)
        }
    }
    return satu
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1