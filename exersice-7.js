function digitPerkalianMinimum(angka) {
    var faktor = []
    var temp = ''

    for (i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            faktor.push(i)
        }
    }
    if (faktor.length % 2 === 0) {
        temp += faktor[(faktor.length / 2) - 1]
        temp += faktor[faktor.length / 2]
    } else {
        temp += faktor[(faktor.length - 1) / 2]
        if (temp.length === 1) {
            return 2
        }
    }
    return temp.length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2