function ParseJson(jsonString){
    try{
        console.log("Przed konwersja: "+jsonString)
        var jsonParse=JSON.parse(jsonString)
        console.log("Po konwersji: "+JSON.stringify(jsonParse))
    }catch(error){
        console.log(error.name)
        console.log(error.message)
    }
}

ParseJson('{"name":"Mango","age":3,isHappy:true}')

console.log()
console.log()

ParseJson('{"name":"Mango","age":3,"isHappy":true}')