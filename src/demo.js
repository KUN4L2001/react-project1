let obj = {
    name: "Kunal",
    id: "123"
}
console.log(obj)

const surname = "surname"

let obj2 = {
    surname: "Gaikwad"
}

console.log(obj2)

console.log({...obj, [surname]: "Gaikwad2"})