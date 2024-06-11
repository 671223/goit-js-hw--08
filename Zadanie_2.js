const json = '{"name":"Mango","age":3,"isHappy":true}'

var jsonParse=JSON.parse(json)

console.log("Kopia: "+json)
console.log("name: "+jsonParse.name)
console.log("age: "+jsonParse.age)
console.log("isHappy: "+jsonParse.isHappy)