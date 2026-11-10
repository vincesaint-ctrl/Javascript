//alert("Hello world from external javascript");
console.log( "Hello world");
console.log("My name is Vincent")
console.log("100")
console.log("10+30")

let firstname = prompt("your first name:")
let school = prompt("your school name:")

alert("My name is " + firstname  + " I school at " + school)

for (a=1; a<=30; a++){
    console.log(a)
    if(a%3===0 && a%5===0){
        console.log("chai and mandazi")
    }
    else if (a%3===0){
        console.log("chai")
    }
    else if (a%5===0){
        console.log( "mandazi")
    }
    else{
        console.log(a)
    }
}

