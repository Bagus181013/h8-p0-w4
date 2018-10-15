function urutkanAbjad(str) {
    var result=[]
    var temp=''
    for (var i = 0; i < str.length; i++) {
        result.push(str[i])

    }
    result.sort(function(a, b) { return a > b })

    for (var i = 0; i < str.length; i++) {
        temp += result[i]
    }

    return temp
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'