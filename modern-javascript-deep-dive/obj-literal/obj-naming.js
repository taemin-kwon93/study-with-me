let person1 = {
    firstName: 'Tae-min',
    'last-name': 'Kwon',
}

let person2 = {
    firstName: 'Tae-min',
    // last-name: 'Kwon', 식별자 네이밍 규칙을 준수하지 않음.
}

console.log(person1); // { firstName: 'Tae-min', 'last-name': 'Kwon' }
console.log(person2); // { firstName: 'Tae-min' }
console.log(person1["last-name"]); // Kwon
